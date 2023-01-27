import axios from "axios";
axios.defaults.baseURL = "http://89.39.208.123:2023";

export const http = {
  post: axios.post,
  get: axios.get,
  delete: axios.delete,
  put: axios.put,
  patch: axios.patch,
};
