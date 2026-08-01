import axios from "axios";

export const ECOMM_USER_ACCESS_TOKEN_KEY =
  "ecommUserAccessToken";

export const ECOMM_ADMIN_ACCESS_TOKEN_KEY =
  "ecommAdminAccessToken";

export const AUTH_CONTEXT_USER = "ecomm-user";

export const AUTH_CONTEXT_ADMIN = "ecomm-admin";

// ─────────────────────────────────────────────
// Detect auth context
// ─────────────────────────────────────────────

const getAuthContext = (config = {}) => {
  const rawContext = config?.authContext;

  if (rawContext) {
    return String(rawContext).trim().toLowerCase() ===
      AUTH_CONTEXT_ADMIN
      ? AUTH_CONTEXT_ADMIN
      : AUTH_CONTEXT_USER;
  }

  const requestUrl = String(config?.url || "")
    .trim()
    .toLowerCase();

  const isAdminApiCall =
    requestUrl.startsWith("/admin") ||
    requestUrl.includes("/admin/");

  if (isAdminApiCall) {
    return AUTH_CONTEXT_ADMIN;
  }

  return AUTH_CONTEXT_USER;
};

const getTokenStorageKey = (authContext) => {
  return authContext === AUTH_CONTEXT_ADMIN
    ? ECOMM_ADMIN_ACCESS_TOKEN_KEY
    : ECOMM_USER_ACCESS_TOKEN_KEY;
};

const getLogoutEventName = (authContext) => {
  return authContext === AUTH_CONTEXT_ADMIN
    ? "auth:logout:ecomm-admin"
    : "auth:logout:ecomm-user";
};

const getPortalForAuthContext = (authContext) => {
  return authContext === AUTH_CONTEXT_ADMIN
    ? "admin-ecomm"
    : "ecomm";
};

// ─────────────────────────────────────────────
// Axios Instance
// ─────────────────────────────────────────────

const axiosInstance = axios.create({
  baseURL:
    import.meta.env.VITE_API_BASE_URL ||
    "http://localhost:8081/api",

  timeout: 15000,

  withCredentials: true,

  headers: {
    "Content-Type": "application/json",

    "x-storefront": "ecomm",
  },
});

// ─────────────────────────────────────────────
// Request Interceptor
// ─────────────────────────────────────────────

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers = config.headers || {};

    config.headers["x-storefront"] = "ecomm";

    const authContext = getAuthContext(config);

    const token =
      localStorage.getItem(
        getTokenStorageKey(authContext)
      ) || localStorage.getItem("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },

  (error) => Promise.reject(error)
);

// ─────────────────────────────────────────────
// Refresh Logic
// ─────────────────────────────────────────────

let isRefreshing = false;

let failedQueue = [];

let isLoggingOut = false;

export const setLoggingOut = (val) => {
  isLoggingOut = val;
};

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

// ─────────────────────────────────────────────
// Response Interceptor
// ─────────────────────────────────────────────

axiosInstance.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    const authContext =
      getAuthContext(originalRequest);

    const tokenStorageKey =
      getTokenStorageKey(authContext);

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !isLoggingOut &&
      !originalRequest.url.includes(
        "/auth/refresh"
      ) &&
      !originalRequest.url.includes(
        "/auth/login"
      ) &&
      !originalRequest.url.includes(
        "/auth/logout"
      )
    ) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({
            resolve,
            reject,
          });
        })
          .then((token) => {
            originalRequest.headers.Authorization =
              `Bearer ${token}`;

            return axiosInstance(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;

      isRefreshing = true;

      try {
        const res = await axiosInstance.post(
          "/auth/refresh",
          {
            portal:
              getPortalForAuthContext(
                authContext
              ),
          }
        );

        const newToken = res.data.accessToken;

        localStorage.setItem(
          tokenStorageKey,
          newToken
        );

        originalRequest.headers.Authorization =
          `Bearer ${newToken}`;

        processQueue(null, newToken);

        return axiosInstance(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);

        localStorage.removeItem(
          tokenStorageKey
        );

        window.dispatchEvent(
          new Event(
            getLogoutEventName(authContext)
          )
        );

        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;