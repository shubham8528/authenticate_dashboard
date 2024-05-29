import { authActionTypes } from "./types";

const initialState = {
  data: [],
  LOADING: false,
};
export const LoginReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case authActionTypes.LOGIN_REQUEST:
      return { ...state, LOADING: true };
    case authActionTypes.LOGIN_SUCCESS:
      return { ...state, data: action.payload, LOADING: false };
    case authActionTypes.LOGIN_FAILURE:
      return { ...state, LOADING: true };
    default:
      return state;
  }
};
