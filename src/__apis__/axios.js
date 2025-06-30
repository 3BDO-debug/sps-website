import axios from "axios";

/* http://127.0.0.1:8000 -------  https://smart-power-services-d39c5decd525.herokuapp.com*/

export const mainUrl =
  "https://smart-power-services-d39c5decd525.herokuapp.com";

const axiosInstance = axios.create({
  baseURL: mainUrl,
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export default axiosInstance;
