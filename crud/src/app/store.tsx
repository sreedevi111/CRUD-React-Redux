import { configureStore } from '@reduxjs/toolkit';
// import { useDispatch } from 'react-redux';
// import counterReducer from '../features/counter/counterSlice';
// import userReducers from '../features/reducer/userReducer';
import PostReducer from '../features/postSlice'

export const store = configureStore({
  reducer: {
    post: PostReducer,
  },
});


// export type AppDispatch = typeof store.dispatch
// // eslint-disable-next-line no-undef
// export const useAppDispatch: () => AppDispatch = useDispatch

//Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch