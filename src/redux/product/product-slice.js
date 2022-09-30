import { createSlice } from "@reduxjs/toolkit";
import productOperations from "./product-operations";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    closeModal: (state, _) => {
      state.error = null;
    },
  },
  extraReducers: {
    // get all
    [productOperations.getAllProducts.pending]: (state, _) => {
      state.loading = true;
      state.error = null;
    },
    [productOperations.getAllProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.loading = false;
      state.error = null;
    },
    [productOperations.getAllProducts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action;
    },

    //add product
    [productOperations.addProduct.pending]: (state, _) => {
      state.loading = true;
      state.error = null;
    },
    [productOperations.addProduct.fulfilled]: (state, action) => {
      state.products = [...state.products, action.payload];
      state.loading = false;
      state.error = null;
    },
    [productOperations.addProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //delete product
    [productOperations.deleteProduct.pending]: (state, _) => {
      state.loading = true;
      state.error = null;
    },
    [productOperations.deleteProduct.fulfilled]: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      state.loading = false;
      state.error = null;
    },
    [productOperations.deleteProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action;
    },

    //update product
    [productOperations.updateProduct.pending]: (state, _) => {
      state.loading = true;
      state.error = null;
    },
    [productOperations.updateProduct.fulfilled]: (state, action) => {
      state.products = state.products.map((product) =>
        product.id === action.payload.id ? action.payload : product
      );
      state.loading = false;
      state.error = null;
    },
    [productOperations.updateProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default productSlice.reducer;
export const { closeModal } = productSlice.actions;
