import http from "../utils/http";

import { LocalStorageHandler } from "../utils/localStorageHandler";

const signInUser = (data: any) => {
  return http.post("loginAdmin.php", data);
};


export const AuthService = {
  signInUser,
};
