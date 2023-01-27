import axios from "axios";
const userAPI = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});
const user = JSON.parse(localStorage.getItem("user"));
userAPI.interceptors.request.use(
  (config) => {
    const { token } = user;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);
export default userAPI;
