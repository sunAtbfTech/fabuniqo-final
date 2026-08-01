import { baseApi } from "./baseApi";

export const authApi =
  baseApi.injectEndpoints({
    endpoints: (builder) => ({
      login: builder.mutation({
        query: (data) => ({
          url: "/auth/login",

          method: "POST",

          data,
        }),

        invalidatesTags: ["Auth"],
      }),
    }),
  });

export const {
  useLoginMutation,
} = authApi;