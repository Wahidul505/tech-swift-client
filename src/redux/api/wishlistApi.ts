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

    myWishlist: build.query({
      query: (userId: string) => ({
        url: `${WISHLIST_URL}/${userId}`,
        method: "GET",
      }),
      providesTags: [tagTypes.wishlist],
    }),
  }),
});

export const { useAddToWishlistMutation, useMyWishlistQuery } = wishlistApi;
