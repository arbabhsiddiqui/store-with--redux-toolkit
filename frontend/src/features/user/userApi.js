import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints: (builder) => ({
    Users: builder.query({
      query: () => `users`,
    }),
    user: builder.query({
      query: (id) => `users/${id}`,
    }),
    AddUser: builder.mutation({
      query: (user) => ({
        url: "user",
        method: "POST",
        body: JSON.stringify(user),
      }),
    }),
    UpdateUser: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `users/${id}`,
        method: "PUT",
        body: rest,
      }),
    }),
    DeleteUser: builder.mutation({
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
      }),
    }),
    UserLogin: builder.mutation({
      query: (loginCredentials) => ({
        url: `users/login`,
        method: "POST",
        body: loginCredentials,
      }),
    }),
    userProfile: builder.query({
      query: () => `users/profile`,
    }),
    UserProfileUpdate: builder.mutation({
      query: (user) => ({
        url: `users/profile`,
        method: "PUT",
        body: user,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useAddUserMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
  useUserLoginMutation,
  useUserProfileQuery,
  useUserProfileUpdateMutation,
  useUserQuery,
  useUsersQuery,
} = userApi;
