import { put, takeLatest } from "@redux-saga/core/effects";
import React from "react";
import { authActionTypes } from "./types";
import HttpApis from "../../../services/HttpApis";
// import { LoginActionSucc } from "./action";
import { useNavigate } from "react-router-dom";
import { SignInActionSucc } from "./action";

/*----------------------Login------------------------*/
function* isSignInUserAsync(credentials: any): any {
  try {
    const result = yield HttpApis.SignInApi(credentials.payload)
      .then((res) => {
        // const AlertSetting = {
        //   request: "success",
        //   message: "Login Successfully",
        //   duration: 2000,
        //   x_direction: "center",
        //   y_direction: "top",
        // };
        // Auth.setToken(res?.data?.token);
        // NotyfMessage(AlertSetting);

        return res;
      })
      .catch((err) => {
        console.log(err);
      });
    return yield put(SignInActionSucc(result));
  } catch (error) {
    console.log(error);
  }
}
function* signInWatcher() {
  yield takeLatest(authActionTypes.SIGNIN_REQUEST, isSignInUserAsync);
}

export { signInWatcher };
