import { combineReducers } from "redux";
import { LoginReducer } from "../redux/modules/signUp/reducer";
import { SignInReducer } from "../redux/modules/signIn/reducer";

export const rootReducer = combineReducers({
  LoginReducer,
  SignInReducer,
});
