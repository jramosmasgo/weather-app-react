import { ILocation } from "@/types/location";
import axios from "axios";

export const getLocation = async (): Promise<ILocation> => {
  const datalocation = await axios.get<ILocation>(
    `https://api.ipdata.co?api-key=${import.meta.env.VITE_LOCATION_API_KEY}`
  );
  return datalocation.data ?? null;
};
