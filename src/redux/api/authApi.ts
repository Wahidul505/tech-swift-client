import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const AUTH_URL = "/user";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/register`,
        method: "POST",
        data: data,
      }),
    }),

    login: build.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        data: data,
      }),
    }),

    users: build.query({
      query: (query: Record<string, any>) => ({
        url: AUTH_URL,
        method: "GET",
        params: query,
      }),
      providesTags: [tagTypes.user],
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useUsersQuery } = authApi;
