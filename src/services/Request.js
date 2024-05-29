/* eslint-disable */
import axios from "axios";
import { cors } from "../Utils/cors";
import Auth from "./Auth";
import { Notyf } from "notyf";
const notyf = new Notyf({
  position: {
    x: "center",
    y: "top",
  },
});

const toast = {
  error(message) {
    notyf.error(message);
  },
};

export default class Request {
  constructor(headers) {
    cors();
    this.http = axios.create({
      baseURL: process.env.REACT_APP_URL_DEV,
      withCredentials: false,
    });
    this.http.interceptors.request.use(async (config) => {
      let token = Auth.getToken();
      if (headers?.responseType) {
        config.responseType = headers?.responseType;
      }
      config.headers = {
        Authorization: token ? `Bearer ${token}` : "",
        // "Content-Type": "application/json",
        ...headers,
      };
      return config;
    });

    this.http.interceptors.response.use(
      async (response) => {
        return response;
      },
      async (error) => {
        console.error("error", error);
        if (error.response) {
          // forbidden: 403
          // unauthrized: 401
          // not found: 400
          if (
            (error.response.status && error.response.status === 403) ||
            error.response.status === 404
          ) {
            return Promise.reject(error.response.data);
          } else {
            let errorData = error?.response?.data;
            if (error?.request?.responseType === "blob") {
              errorData = JSON.parse(await error.response.data.text());
              if (error.response.status === 500) {
                errorData.message =
                  "We're sorry, but a program error has occurred. Please contact support";
              }
            }
            if (errorData) {
              if (errorData?.message?.length > 1) {
                toast.error(errorData.message);
              } else {
                toast.error(errorData.errorDetail);
              }
            }
            return Promise.reject(errorData);
          }
        } else if (error.request) {
          return Promise.reject(error.request);
        } else {
          return Promise.reject(error);
        }
      }
    );
    for (const method of ["get", "post", "put", "delete"]) {
      this[method] = this.http[method];
    }
  }
}
