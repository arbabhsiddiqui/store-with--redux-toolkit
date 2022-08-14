import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import authReducer from "../features/user/authSlice";
import { productApi } from "../features/product/productApi";
import { categoriesApi } from "../features/categories/categoriesApi";
import { userApi } from "../features/user/userApi";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    [userApi.reducerPath]: userApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productApi.middleware,
      categoriesApi.middleware,
      userApi.middleware
    ),
});
