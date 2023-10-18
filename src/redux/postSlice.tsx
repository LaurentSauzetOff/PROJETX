import { createSlice } from "@reduxjs/toolkit";
import { Dispatch } from "redux";

const initialState = {
  posts: {},
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPosts(state, action) {
      state.posts = action.payload;
    },
  },
});

export default postSlice.reducer;

export function SetPosts(posts: string) {
  return (dispatch: Dispatch) => {
    dispatch(postSlice.actions.getPosts(posts));
  };
}
