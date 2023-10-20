import { createSlice } from "@reduxjs/toolkit";
import { Dispatch } from "redux";

interface ThemeState {
  theme: string;
}

const defaultTheme: string = "dark";

const storedTheme = window?.localStorage.getItem("theme");
const initialState: ThemeState = {
  theme: storedTheme ? JSON.parse(storedTheme) : defaultTheme,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
      localStorage.setItem("theme", JSON.stringify(action.payload));
    },
  },
});

export default themeSlice.reducer;

export function SetTheme(value: string) {
  return (dispatch: Dispatch) => {
    dispatch(themeSlice.actions.setTheme(value));
  };
}
