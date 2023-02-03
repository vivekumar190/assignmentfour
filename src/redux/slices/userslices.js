import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getusers = createAsyncThunk(
  "users/all",
  async (data, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get("https://reqres.in/api/users?page=1");
      console.log("api called");
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response.data);
    }
  }
);
const userslice = createSlice({
  name: "user",
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(getusers.pending, (state, action) => {
      state.loading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(getusers.fulfilled, (state, action) => {
      state.loading = false;
      state.usersList = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(getusers.rejected, (state, action) => {
      state.loading = false;
      console.log(action?.payload);
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });
  },
});
export default userslice.reducer;
