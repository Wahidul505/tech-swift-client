import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const PROFILE_URL = "/profile";

export const profileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    profile: build.query({
      query: (id: string) => ({
        url: `${PROFILE_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.profile],
    }),

    saveProfile: build.mutation({
      query: ({ id, data }) => ({
        url: `${PROFILE_URL}/${id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: [tagTypes.profile],
    }),
  }),
});

export const { useProfileQuery, useSaveProfileMutation } = profileApi;
