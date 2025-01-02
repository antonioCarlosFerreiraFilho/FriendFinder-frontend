import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import postService from "../services/postService";

const initialState = {
  posts: [],
  post: {},
  error: false,
  success: false,
  loading: false,
  message: null,
};

//Publish user photo
export const publishPhoto = createAsyncThunk(
  "post/publish",
  async (photo, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;

    const data = await postService.publishPhoto(photo, token);

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);

// SHOW POSTS
export const allPosts = createAsyncThunk("post/allPosts", async () => {
  const data = await postService.allPosts();

  return data;
});

// GET POST
export const getPost = createAsyncThunk("post/getPost", async (id) => {
  const data = await postService.getPost(id);
  return data;
});

// COMMENTS
export const commentsPost = createAsyncThunk(
  "post/comments",
  async (commentData, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;

    const data = await postService.commentsPost(
      { comments: commentData.comments },
      commentData.id,
      token
    );

    //check errors
    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);

// GET USER POSTS
export const getUserPosts = createAsyncThunk(
  "post/getUserPosts",
  async (id, ThunkAPI) => {
    const token = ThunkAPI.getState().auth.user.token;

    const data = await postService.getUserPosts(id, token);

    return data;
  }
);

// LIKE P
export const likePositive = createAsyncThunk(
  "post/likePositive",
  async (id, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;
    const data = await postService.likePositive(id, token);

    //check errors
    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);

// LIKE N
export const likeNegative = createAsyncThunk(
  "post/likeNegative",
  async (id, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;
    const data = await postService.likeNegative(id, token);

    //check errors
    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);

// SEARCH
export const searchPost = createAsyncThunk(
  "post/search",
  async (query, thunkAPI) => {
    const data = await postService.searchPost(query);

    return data;
  }
);

//--------------------------------
// DELET POST
export const deletPhoto = createAsyncThunk(
  "photo/delete",
  async (id, ThunkAPI) => {
    const token = ThunkAPI.getState().auth.user.token;

    const data = await postService.deletPhoto(id, token);

    if (data.errors) {
      return ThunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);
// UPDATE POST
export const editPhto = createAsyncThunk(
  "photo/edit",
  async (dataPhoto, ThunkAPI) => {
    const token = ThunkAPI.getState().auth.user.token;

    const data = await postService.editPhto(
      { title: dataPhoto.title },
      dataPhoto.id,
      token
    );

    if (data.errors) {
      return ThunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);
//--------------------------------

// POST SLICE
export const postSlice = createSlice({
  name: "post",
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
      // PUBLISH PHOTO
      .addCase(publishPhoto.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(publishPhoto.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.post = action.payload;
        state.posts.unshift(state.post);
        state.message = "Foto publicada com sucesso!";
      })
      .addCase(publishPhoto.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;

        state.post = {};
      })
      // SHOW
      .addCase(allPosts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(allPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.posts = action.payload;
      })
      // GET
      .addCase(getPost.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getPost.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.post = action.payload;
      })
      // COMMENTS
      .addCase(commentsPost.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(commentsPost.fulfilled, (state, actions) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.post.comments.push(actions.payload.comments);
        state.message = "Comentario Publicado com sucesso !";
      })
      .addCase(commentsPost.rejected, (state, actions) => {
        state.loading = false;
        state.success = false;
        state.error = actions.payload;
      })
      // Get User Posts
      .addCase(getUserPosts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getUserPosts.fulfilled, (state, actions) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.posts = actions.payload;
      })
      // Like P
      .addCase(likePositive.fulfilled, (state, actions) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        if (state.post.likePositive) {
          state.post.likePositive.push(actions.payload.userId);
        }
        state.message = "Vocé curtiu esté post !.";
      })
      .addCase(likePositive.rejected, (state, actions) => {
        state.loading = false;
        state.success = false;
        state.error = actions.payload;
      })
      // Like N
      .addCase(likeNegative.fulfilled, (state, actions) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        if (state.post.likeNegative) {
          state.post.likeNegative.push(actions.payload.userId);
        }
        state.message = "Vocé não gostou desté post.";
      })
      .addCase(likeNegative.rejected, (state, actions) => {
        state.loading = false;
        state.success = false;
        state.error = actions.payload;
      })
      // SEARCH
      .addCase(searchPost.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(searchPost.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.posts = action.payload;
      });
  },
});

export const { reset } = postSlice.actions;
export default postSlice.reducer;
