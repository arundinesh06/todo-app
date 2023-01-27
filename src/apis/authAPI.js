import axios from "axios";
const authAPI = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});
authAPI.interceptors.request.use(
  (config) => {
    config = {
      ...config,
      headers: { "Content-Type": "application/json" },
      // params: {
      //   ...config.params,
      //   key: process.env.REACT_APP_API_KEY,
      // },
    };

    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);
export default authAPI;
