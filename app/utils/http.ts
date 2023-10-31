import axios from "axios";

const BASE_URL = "https://dhc.shellcode.co.in/";

const axiosInstance = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export default axiosInstance;
