import { configureStore } from "@reduxjs/toolkit";
import userslice from "../slices/userslices";

const store = configureStore({
  reducer: {
    users: userslice,
  },
});
export default store;
