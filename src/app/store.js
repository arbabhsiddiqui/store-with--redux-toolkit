import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import authReducer from "../features/auth/AuthSlice";
import { productApi } from "../features/product/productApi";
import { categoriesApi } from "../features/categories/categoriesApi";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    [productApi.reducerPath]: productApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productApi.middleware,
      categoriesApi.middleware
    ),
});
