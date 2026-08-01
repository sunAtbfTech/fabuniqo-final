import { baseApi } from "./baseApi";

export const productApi =
  baseApi.injectEndpoints({
    endpoints: (builder) => ({
      getProducts: builder.query({
        query: () => ({
          url: "/products",

          method: "GET",
        }),

        providesTags: ["Products"],
      }),

      getProductById: builder.query({
        query: (id) => ({
          url: `/products/${id}`,

          method: "GET",
        }),

        providesTags: ["Products"],
      }),
    }),
  });

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  
} = productApi;