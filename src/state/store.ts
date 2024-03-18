import { configureStore } from "@reduxjs/toolkit";
import feeDataSlice from "@/state/features/fees/feeDataSlice";
import callArgDatasSlice from "./features/callArgDatas/callArgDatasSlice";
export const store = configureStore({
  reducer: {
    feeDatas: feeDataSlice.reducer,
    callArgs: callArgDatasSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
