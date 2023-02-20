import { location } from "@/config/api/routes";
import { ICurrentLocation } from "@/types/currentLocation";
import apiWeatherInstance from "./ApiConfig";

export const getWeatherByLocation = async (namePlace: string) => {
  return await apiWeatherInstance.get<ICurrentLocation>(location, {
    params: {
      q: namePlace,
    },
  });
};
