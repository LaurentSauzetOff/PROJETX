// reducer.tsx
import { combineReducers } from "redux"; 

import userSlice from "./postSlice.tsx";
import themeSlice from "./theme.tsx";
import postSlice from "./postSlice.tsx";

const rootReducer = combineReducers({
  user: userSlice,
  theme: themeSlice,
  post: postSlice,
});

export default rootReducer;
