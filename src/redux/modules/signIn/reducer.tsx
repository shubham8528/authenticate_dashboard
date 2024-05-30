import { authActionTypes } from "./types";

const initialState = {
  data: [],
  LOADING: false,
};
export const SignInReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case authActionTypes.SIGNIN_REQUEST:
      return { ...state, LOADING: true };
    case authActionTypes.SIGNIN_SUCCESS:
      return { ...state, data: action.payload, LOADING: false };
    case authActionTypes.SIGNIN_FAILURE:
      return { ...state, LOADING: true };
    default:
      return state;
  }
};
