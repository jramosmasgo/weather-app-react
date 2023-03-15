import axios, { AxiosInstance } from "axios";

const apiWeatherInstance: AxiosInstance = axios.create({
  baseURL: "http://api.weatherapi.com/v1/",
});

apiWeatherInstance.interceptors.request.use(
  async (config) => {
    const key = import.meta.env.VITE_WEATHER_API_KEY;

    config.params = { ...config.params, key };

    return config;
  },
  (err) => {
    console.log(err);
    Promise.reject(err);
  }
);

export default apiWeatherInstance;
