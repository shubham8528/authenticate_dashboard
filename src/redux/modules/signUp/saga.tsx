import { put, takeLatest } from "@redux-saga/core/effects";
import React from "react";
import { authActionTypes } from "./types";
import HttpApis from "../../../services/HttpApis";

/*----------------------Login------------------------*/
function* isLoginUserAsync(credentials: any) {
  try {
    const result = yield HttpApis.loginApi(credentials.payload)
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
    // return yield put(LoginActionSucc(result));
  } catch (error) {
    console.log(error);
  }
}
function* loginWatcher() {
  yield takeLatest(authActionTypes.LOGIN_REQUEST, isLoginUserAsync);
}

export { loginWatcher };
