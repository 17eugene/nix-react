import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";

const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/goods");
      return data.goods;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const addProduct = createAsyncThunk(
  "products/addProduct",
  async ({ title, weight, description }, { rejectWithValue }) => {
    const product = { title, weight, description };
    try {
      const { data } = await axios.post("/goods", product);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async ({ id }, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/goods/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ id, title, weight, description }, { rejectWithValue }) => {
    const product = { title, weight, description };
    try {
      const { data } = await axios.put(`/goods/${id}`, product);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

const productOperations = {
  getAllProducts,
  addProduct,
  deleteProduct,
  updateProduct,
};

export default productOperations;
