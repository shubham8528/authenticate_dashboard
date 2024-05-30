import { useNavigate } from "react-router-dom";
import { authActionTypes } from "./types";

/*--------------LoginAction----------------*/
export const LoginActionReq = (credentials: any) => {
  return {
    type: authActionTypes.LOGIN_REQUEST,
    payload: credentials,
  };
};
export const LoginActionSucc = (response: any) => {
  return {
    type: authActionTypes.LOGIN_SUCCESS,
    payload: response?.data,
  };
};
export const LoginActionFail = () => {
  return {
    type: authActionTypes.LOGIN_FAILURE,
  };
};
