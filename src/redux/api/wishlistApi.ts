import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const WISHLIST_URL = "/wishlist";

export const wishlistApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addToWishlist: build.mutation({
      query: (data) => ({
        url: WISHLIST_URL,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.wishlist],
    }),

    updateWishlist: build.mutation({
      query: ({ id, payload }) => ({
        url: `${WISHLIST_URL}/${id}`,
        method: "PATCH",
        data: payload,
      }),
      invalidatesTags: [tagTypes.wishlist],
    }),

    myWishlist: build.query({
      query: () => ({
        url: WISHLIST_URL,
        method: "GET",
      }),
      providesTags: [tagTypes.wishlist],
    }),
  }),
});

export const {
  useAddToWishlistMutation,
  useUpdateWishlistMutation,
  useMyWishlistQuery,
} = wishlistApi;
