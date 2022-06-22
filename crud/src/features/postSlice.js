// reducer

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//createAsyncThunk  to deal with API

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
});

export const createPosts = createAsyncThunk("posts/createPosts", async (body) => {
  
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "post",
    
    body: JSON.stringify(body),
    
  }).then((res) => {res.json();console.log(body)}).then((data)=> data);
});

export const editPosts = createAsyncThunk("posts/editPosts", async (body,id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${body.id}`, {
    method: "put",
    body: body,
  }).then((res) => res.json()).then((data)=> data);
});


const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    postCreated: {},
    loading: false,
  },
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.loading = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    [getPosts.rejected]: (state, action) => {
      state.loading = false;
    },

    addPost: (state, action) => {
      state = state.push(action.payload);
    },

    [createPosts.fulfilled]: (state, action) => {
        state.loading = false;
        console.log("state:::",state)
        console.log("action:::",action)
        state.postCreated = action.payload
      },
      [createPosts.pending]: (state, action) => {
        state.loading = true;
      },
      [createPosts.rejected]: (state, action) => {
        state.loading = false;
      },

      [editPosts.fulfilled]: (state, action) => {
        state.loading = false;
        console.log("state:::",state)
        console.log("action:::",action)
        state.postCreated = action.payload
      },
      [editPosts.pending]: (state, action) => {
        state.loading = true;
      },
      [editPosts.rejected]: (state, action) => {
        state.loading = false;
      },
  },
});

export default postSlice.reducer;
