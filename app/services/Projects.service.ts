import http from "../utils/http";
const getProjects = () => {
  return http.get("getProjectListing.php");
};
const getSingleProject = (id: string) => {
  return http.get(`getProjectDetails.php?id=${id}`);
};
const createProject = (data: any) => {
  return http.post("listProjects.php", data);
};
const updateBrouchere = (data: any) => {
  return http.post("updateBVT.php", data);
};
const changeStatus = (data: any) => {
  return http.post("changeProjectStatus.php", data);
};
export const ProjectsService = {
  getProjects,
  getSingleProject,
  createProject,
  updateBrouchere,
  changeStatus,
};
