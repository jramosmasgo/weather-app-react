import { WeatherState } from "@/types/context";
import { ILocationWeather } from "@/types/currentLocation";
import React, { useReducer } from "react";
import { WeatherContext } from "./WeatherContext";
import weatherReducer from "./weatherReducer";

const INITIAL_STATE: WeatherState = {
  myPlace: {} as ILocationWeather,
  savedPlaces: [],
  themeApplication: "light",
  user: null,
  unitMeasurement: "C",
};

interface WeatherProviderProps {
  children: React.ReactNode;
}

const WeatherProvider: React.FunctionComponent<WeatherProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(weatherReducer, INITIAL_STATE);

  return (
    <WeatherContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
