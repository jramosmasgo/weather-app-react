import axios, { AxiosInstance } from "axios";

const apiWeatherInstance: AxiosInstance = axios.create({
  baseURL: "http://api.weatherapi.com/v1/current.json",
});

apiWeatherInstance.interceptors.request.use(
  async (config) => {
    const key = "cf9fd346a30a40e393834852222510";

    config.params = { ...config.params, key };

    return config;
  },
  (err) => {
    console.log(err);
    Promise.reject(err);
  }
);

export default apiWeatherInstance;
