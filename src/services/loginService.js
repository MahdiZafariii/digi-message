import { http } from "./httpServices";

export function loginService(data, header) {
  return http.post("login", data, { headers: header });
}
