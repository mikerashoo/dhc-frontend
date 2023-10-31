import http from "../utils/http";
const getBlogs = () => {
  return http.get("getBlogs.php");
};
const getSingleBlogs = (id: string, type: string) => {
  return http.get(`getBlogDetails.php?id=${id}&type=${type}`);
};
const uploadVideo = (data: any) => {
  return http.post(`addVideoBlog.php`, data);
};
const addBlog = (data: any) => {
  return http.post(`addBlog.php`, data);
};
export const BlogsService = {
  getBlogs,
  getSingleBlogs,
  uploadVideo,
  addBlog,
};
