import { configureStore } from "@reduxjs/toolkit";
import borderRadiusReducer from "../features/border-radius/borderRadiusSlice";

export const store = configureStore({
  reducer: {
    borderRadius: borderRadiusReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
