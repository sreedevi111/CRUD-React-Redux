import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
// import userReducers from '../features/reducer/userReducer';
import PostReducer from '../features/postSlice'

export const store = configureStore({
  reducer: {
    post: PostReducer,
  },
});

