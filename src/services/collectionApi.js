import { baseApi } from "./baseApi";
import { normalizeProduct }
from "../utils/normalizeProduct";

export const collectionApi = baseApi.injectEndpoints({

  endpoints: (builder) => ({

   getCollectionProducts: builder.query({

  query: ({
    slug,
    page = 1,
    limit = 20,
    sort = "featured",
    filters = {},
  }) => ({
    url: `/products/all/${slug}`,
    params: {
      page,
      limit,
      sort,

      colors: filters.colors?.join(","),
      platings: filters.platings?.join(","),
      occasions: filters.occasions?.join(","),
      productTypes: filters.productTypes?.join(","),

      price: filters.price,
      discount: filters.discount,
      rating: filters.rating,
    },
  }),

  transformResponse: (response) => ({

    ...response,

    products:
      response?.products?.map(
        normalizeProduct
      ) || [],

  }),

}),

  }),

});

export const {
  useGetCollectionProductsQuery,
} = collectionApi;