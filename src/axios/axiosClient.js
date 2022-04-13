import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api.petfinder.com/v2",
});

export default axiosClient;
