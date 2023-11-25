import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const PRODUCT_URL = "/product";

export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    products: build.query({
      query: (query: Record<string, any>) => ({
        url: PRODUCT_URL,
        method: "GET",
        params: query,
      }),
      providesTags: [tagTypes.product],
    }),

    singleProduct: build.query({
      query: (id: string) => ({
        url: `${PRODUCT_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.product],
    }),

    addProduct: build.mutation({
      query: (data: any) => ({
        url: PRODUCT_URL,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.product],
    }),

    updateProduct: build.mutation({
      query: ({ id, data }: { id: string; data: any }) => ({
        url: `${PRODUCT_URL}/${id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: [tagTypes.product],
    }),

    deleteProduct: build.mutation({
      query: (id: any) => ({
        url: `${PRODUCT_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.product],
    }),
  }),
});

export const {
  useProductsQuery,
  useSingleProductQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
