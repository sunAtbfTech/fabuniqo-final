import { baseApi } from "../../../services/baseApi";
import { normalizeProduct }
from "../../../utils/normalizeProduct";

export const collectionApi = baseApi.injectEndpoints({

  endpoints: (builder) => ({

   getProductsByCategory:
builder.query({

  query: ({
    slug,
    page = 1,
    limit = 20,
    filters = {},
  }) => ({

    url:
      `/products/category/${slug}`,

    params: {

      page,
      limit,

      tags:
        filters.tags?.join(","),

    },

  }),

  transformResponse:
    (response) => ({

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
  useGetProductsByCategoryQuery,
} = collectionApi;