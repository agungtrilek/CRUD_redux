import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import storage from "redux-persist/lib/storage";

const API_URL = "https://dummyjson.com/auth/login";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (
    dataUser: { username: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(API_URL, dataUser);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      storage.removeItem("persist:root");
    },
  },
});
