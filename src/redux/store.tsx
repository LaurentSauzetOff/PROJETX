import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer.tsx";

const store = configureStore({
  reducer: rootReducer,
});

const { dispatch } = store;

export { store, dispatch };
