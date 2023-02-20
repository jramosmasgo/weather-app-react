import { ILocation } from "@/types/location";
import axios from "axios";

export const getLocation = async (): Promise<ILocation> => {
  const datalocation = await axios.get<ILocation>(
    "https://api.ipdata.co?api-key=103d2d6ed44f7690cbece89921a95a4d6a0755fabdfb0f313e2ee827"
  );
  return datalocation.data ?? null;
};
