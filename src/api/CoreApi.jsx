import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://kbs-data.azurewebsites.net/",
});

export { axiosInstance };