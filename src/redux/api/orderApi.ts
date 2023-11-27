import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const ORDER_URL = "/order";

export const orderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createOrder: build.mutation({
      query: (data) => ({
        url: ORDER_URL,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.order],
    }),

    myOrders: build.query({
      query: (userId: string) => ({
        url: `/my-order/${userId}`,
        method: "GET",
      }),
      providesTags: [tagTypes.order],
    }),

    mySingleOrder: build.query({
      query: (id: string) => ({
        url: `/my-order-single/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.order],
    }),

    orders: build.query({
      query: (query: Record<string, any>) => ({
        url: ORDER_URL,
        method: "GET",
        params: query,
      }),
      providesTags: [tagTypes.order],
    }),

    singleOrder: build.query({
      query: (id: string) => ({
        url: `${ORDER_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.order],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useMyOrdersQuery,
  useMySingleOrderQuery,
  useOrdersQuery,
  useSingleOrderQuery,
} = orderApi;
