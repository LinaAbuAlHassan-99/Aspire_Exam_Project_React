import { combineReducers } from "redux";
import { getLoginDataReducer } from "./LoginUserReducer";
export const Reducers = combineReducers({
  getLoginDataReducer: getLoginDataReducer,
});
