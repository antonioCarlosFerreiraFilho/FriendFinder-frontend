import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "../services/userService";

const initialState = {
  users: [],
  user: {},
  error: false,
  success: false,
  loading: false,
  message: null,
};

// SHOW USERS
export const allUsers = createAsyncThunk("user/show", async () => {
  const data = await userService.allUsers();

  return data;
});

// PROFILE
export const profile = createAsyncThunk(
  "user/profile",
  async (user, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;

    const data = await userService.profile(user, token);

    return data;
  }
);

// EDIT
export const UpdateUser = createAsyncThunk(
  "user/update",
  async (user, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;

    const data = await userService.UpdateUser(user, token);

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);

// USER DETAILS
export const getUserDetails = createAsyncThunk(
  "user/details",
  async (id, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;

    const data = await userService.getUserDetails(id, token);
    return data;
  }
);

// USER SLICE
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.message = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      //SHOW USERS
      .addCase(allUsers.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(allUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.users = action.payload;
      })
      //PROFILE
      .addCase(profile.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(profile.fulfilled, (state, actions) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.user = actions.payload;
      })
      //UPDATE USER
      .addCase(UpdateUser.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(UpdateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.user = action.payload;
        state.message = " Usuario atualizado. ";
      })
      .addCase(UpdateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;

        state.user = {};
      })
      // USER DETAILS
      .addCase(getUserDetails.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getUserDetails.fulfilled, (state, actions) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.user = actions.payload;
      });
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
