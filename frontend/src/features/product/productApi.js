import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const user = JSON.parse(localStorage.getItem("user"));
// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints: (builder) => ({
    Products: builder.query({
      query: () => `products`,
    }),
    Product: builder.query({
      query: (id) => `products/${id}`,
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
    }),
    UpdateProduct: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `products/${id}`,
        method: "PUT",
        body: rest,
      }),
    }),
    DeleteProduct: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
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
