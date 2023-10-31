import http from "../utils/http";
const getCustomers = (type: string) => {
  return http.get(`getCustomers.php?type=${type}`);
};
const getSingleCustomer = (id: string) => {
  return http.get(`userInfo.php?id=${id}`);
};
export const CustomersService = {
  getCustomers,
  getSingleCustomer,
};
