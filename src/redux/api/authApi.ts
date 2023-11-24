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
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
