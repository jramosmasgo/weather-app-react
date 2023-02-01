import { location } from "@/config/api/routes";
import apiWeatherInstance from "./ApiConfig";

export const getWeatherByLocation = async (namePlace: string) => {
  return await apiWeatherInstance.get(location, {
    params: {
      q: namePlace,
    },
  });
};
