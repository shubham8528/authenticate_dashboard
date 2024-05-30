import { useNavigate } from "react-router-dom";
import { authActionTypes } from "./types";

/*--------------LoginAction----------------*/
export const SignInActionReq = (credentials: any) => {
  return {
    type: authActionTypes.SIGNIN_REQUEST,
    payload: credentials,
  };
};
export const SignInActionSucc = (response: any) => {
  return {
    type: authActionTypes.SIGNIN_SUCCESS,
    payload: response?.data,
  };
};
export const SignInActionFail = () => {
  return {
    type: authActionTypes.SIGNIN_FAILURE,
  };
};
