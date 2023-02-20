import { ILocationWeather } from "./currentLocation";

export interface WeatherState {
  myPlace: ILocationWeather;
  savedPlaces: ILocationWeather[];
  themeApplication: "light" | "dark";
  user: any;
  unitMeasurement: "C" | "F";
}
