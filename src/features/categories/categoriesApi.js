import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  endpoints: (builder) => ({
    Categories: builder.query({
      query: (name) => `/products/categories`,
    }),
    ProductByCategory: builder.query({
      query: (name) => `/products/categories/${name}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useCategoriesQuery, useProductByCategoryQuery } = categoriesApi;
