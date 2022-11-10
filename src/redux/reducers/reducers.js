import { combineReducers } from "redux";
import { photosReducer } from "./photosReducer";
import { usersReducer } from "./usersReducer";

export const rootReducer = combineReducers({
  photos: photosReducer,
  users: usersReducer
})