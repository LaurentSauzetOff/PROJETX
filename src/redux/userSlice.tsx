import { createSlice } from "@reduxjs/toolkit";
import { Dispatch } from "redux";

const initialState = {
  user: JSON.parse(window?.localStorage.getItem("user") || "{}"),
  edit: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout(state) {
      state.user = null;
      localStorage?.removeItem("user");
    },
    updateProfile(state, action) {
      state.edit = action.payload;
    },
  },
});

export default userSlice.reducer;

export function UserLogin(user: string) {
  return (dispatch: Dispatch, getState) => {
    dispatch(userSlice.actions.login(user));
  };
}

export function Logout() {
  return (dispatch: Dispatch, getState) => {
    dispatch(userSlice.actions.logout());
  };
}

export function UpdateProfile(val: string) {
  return (dispatch: Dispatch, getState) => {
    dispatch(userSlice.actions.updateProfile(val));
  };
}
