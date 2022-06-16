// reducer

import {  createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//createAsyncThunk  to deal with API

export const getPosts = createAsyncThunk("posts/getPosts", async() =>{
    return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
    );

})

const postSlice = createSlice(({
    name: "posts",
    initialState:{
        posts: [],
        loading: false
    },
    extraReducers:{
        [getPosts.pending] : (state, action) =>{
            state.loading = true;
        },
        [getPosts.fulfilled] : (state, action) =>{
            state.loading = false;
            state.posts = action.payload
        },
        [getPosts.rejected]: (state, action)=>{
            state.loading = false
        },
    }
}))

export default postSlice.reducer