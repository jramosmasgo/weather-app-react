import { WeatherState } from "@/types/context";
import { dispatchActions } from "@/types/dispatchActions";
import { createContext } from "react";

export type WeatherContextProps = {
  state: WeatherState;
  dispatch: React.Dispatch<dispatchActions>;
};

export const WeatherContext = createContext<WeatherContextProps>(
  {} as WeatherContextProps
);
