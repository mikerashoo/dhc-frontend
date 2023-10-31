import http from "../utils/http";
const getUsers = () => {
  return http.get("getUserLeads.php");
};
const exportUserLeads = () => {
  return http.get("exportLeads.php");
};
const getManagers = () => {
  return http.get("getDevLeads.php");
};
const exportManagerLeads = () => {
  return http.get("exportDevLeads.php");
};
export const LeadsService = {
  getUsers,
  getManagers,
  exportUserLeads,
  exportManagerLeads,
};
