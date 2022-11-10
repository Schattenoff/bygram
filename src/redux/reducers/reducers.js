import { combineReducers } from "redux";
import { photosReducer } from "./photosReducer";

export const rootReducer = combineReducers({
  photos: photosReducer
})