import http from "../utils/http";
const getHome = () => {
  return http.get("https://dhc.shellcode.co.in/adminHome.php");
};
export const HomeService = {
  getHome,
};
