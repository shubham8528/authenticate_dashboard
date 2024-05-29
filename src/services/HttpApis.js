/* eslint-disable import/no-anonymous-default-export */
import { Routes } from "../Constants/routes";
import HttpMethod from "./HttpMethod";

class HttpApis {
  async loginApi(params) {
    return await HttpMethod._post("auth/login", params);
  }
  async forgetApi(params) {
    return await HttpMethod._post("auth/forgot-password?locale=en", params);
  }

  async confirmPasswordApi(params) {
    return await HttpMethod._post("auth/reset-password", params);
  }
}
export default new HttpApis();
