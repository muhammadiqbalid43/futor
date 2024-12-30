import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://strapi-store-server.onrender.com/api",
});

export default axiosClient;
