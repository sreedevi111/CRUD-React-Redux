// reducer

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
// import type {RootState} from '../app/store'
import Post from "../models/post";

//createAsyncThunk: accepts an action type string and a function that returns a promise, and generates a thunk that dispatches pending/fulfilled/rejected action types based on that promise

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
{    res.json()}  );
});

export const createPosts = createAsyncThunk("posts/createPosts", async (body: object) => {
  
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "post", 
    body: JSON.stringify(body), 
  }).then((res) => {res.json();console.log(body)}).then((data)=> data);
});

export const editPosts = createAsyncThunk("posts/editPosts", async (body: object,id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/`, {
    method: "put",
    body: JSON.stringify(body),
  }).then((res) => res.json()).then((data)=> data);
});

export const deletePosts = createAsyncThunk("posts/editPosts", async (body,id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/`, {
    method: "delete",
    body: JSON.stringify(body),
  }).then((res) => res.json()).then((data)=> data);
});


const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: Array<Post>
  },
  extraReducers: {
    // [getPosts.pending]: (state) => {
    //   state.loading = true;
    // },
    [getPosts.fulfilled.type]: (state: any, action:PayloadAction) => {
      state.loading = false;
      state.posts = action.payload;
      console.log(state.posts)
    },
    // [getPosts.rejected]: (state) => {
    //   state.loading = false;
    // },

    addPost: (state:any , action) => {
      state = state.push(action.payload);
    },

    createPosts: (state: any, action) => {
      state.loading = false;
      console.log("state:::", state);
      console.log("action:::", action);
      state.postCreated = action.payload;
    },
    // [createPosts.pending]: (state) => {
    //   state.loading = true;
    // },
    // [createPosts.rejected]: (state) => {
    //   state.loading = false;
    // },

    editPosts: (state: any, action) => {
      state.loading = false;
      console.log("state:::", state);
      console.log("action:::", action);
      state.postCreated = action.payload;
    },
    // [editPosts.pending]: (state) => {
    //   state.loading = true;
    // },
    // [editPosts.rejected]: (state, action) => {
    //   state.loading = false;
    // },
    ////////
    deletePosts: (state: any, action) => {
      state.value = state.value.filter((user: Post) => user.id !== action.payload.id);
    },
    //////////
  },
  reducers: {},
});

export default postSlice.reducer;
