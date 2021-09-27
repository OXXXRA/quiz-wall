import axios from "axios";
import { authCoreStore } from "../modules/Auth/auth-store";

const baseURL = process.env.REACT_APP_API_URL || "http://localhost:3366";

export const api = axios.create({
  baseURL: baseURL,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

api.interceptors.request.use((req) => {
  req.headers.authorization = "Bearer " + authCoreStore.getState().token;
  return req;
});

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log("error: ", error);
    return Promise.reject(error);
  }
);
