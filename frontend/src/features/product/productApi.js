import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const user = JSON.parse(localStorage.getItem("user"));
// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    Products: builder.query({
      query: () => `products`,
      providesTags: ["Product"],
    }),
    Product: builder.query({
      query: (id) => `products/${id}`,
      providesTags: ["Product"],
    }),
    AddProduct: builder.mutation({
      query: (product) => ({
        url: "products",
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          // 'content-type': 'Json/plain',
          authorization: `Bearer ${user.token}`,
        },
      }),
      invalidatesTags: ["Product"],
    }),
    UpdateProduct: builder.mutation({
      query: ({ _id, ...rest }) => ({
        url: `products/${_id}`,
        method: "PUT",
        body: rest,
        headers: {
          // 'content-type': 'Json/plain',
          authorization: `Bearer ${user.token}`,
        },
      }),
      invalidatesTags: ["Product"],
    }),
    DeleteProduct: builder.mutation({
      query: (_id) => ({
        url: `products/${_id}`,
        method: "DELETE",
        headers: {
          // 'content-type': 'Json/plain',
          authorization: `Bearer ${user.token}`,
        },
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useProductsQuery,
  useProductQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = productApi;
