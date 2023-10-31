import http from "../utils/http";
const createSubAdmin = (data: any) => {
  return http.post("createSubAdmin.php", data);
};
const getSubadmins = () => {
  return http.get("getSubAdmins.php");
};
const removeSubadmin = (id: any) => {
  return http.get(`removeSubAdmin.php?id=${id}`);
};

export const SubAdminService = {
  createSubAdmin,
  getSubadmins,
  removeSubadmin,
};
