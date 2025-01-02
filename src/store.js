import { configureStore } from "@reduxjs/toolkit";

// SLICES
import authSlice from "./slices/authSlice";
import userSlice from "./slices/userSlice";
import postSlice from "./slices/postSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    post: postSlice,
  },
});
