import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./product/product-slice";

export const store = configureStore({
  reducer: productSlice,
  devtools: process.env.NODE_ENV === "development",
});
