import { autocomplete, location } from "@/config/api/routes";
import {
  ICurrentLocation,
  ILocationAutocomplete,
} from "@/types/currentLocation";
import apiWeatherInstance from "./ApiConfig";

export const getWeatherByLocation = async (namePlace: string) => {
  return await apiWeatherInstance.get<ICurrentLocation>(location, {
    params: {
      q: namePlace,
    },
  });
};

export const autocompletePlace = async (key: string) => {
  return await apiWeatherInstance.get<ILocationAutocomplete[]>(autocomplete, {
    params: {
      q: key,
    },
  });
};
