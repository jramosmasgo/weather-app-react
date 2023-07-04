import { getWeatherByLocation } from "@/api/WeatherServices";
import MapView from "@/components/weather/MapView";
import { ICurrentLocation } from "@/types/currentLocation";
import React from "react";
import DetailsWeather from "./components/DetailsWeather";
import InputSearchPlace from "./components/InputSearchPlace";
import "./styles.scss";

const Search: React.FunctionComponent = () => {
  const [placeFound, setPlaceFound] = React.useState<ICurrentLocation>();

  const getWeather = async (lat: number, lng: number) => {
    const result = await getWeatherByLocation(`${lng},${lat}`);
    setPlaceFound(result.data);
  };
  console.log(placeFound);

  return (
    <div className="search">
      <div className="search_head">
        <InputSearchPlace onClickPlace={(lat, lng) => getWeather(lng, lat)} />
      </div>
      {placeFound && (
        <div className="search_body">
          <MapView
            classStyle="search_body-map"
            latitude={placeFound?.location.lat}
            longitude={placeFound?.location.lon}
          />
          <DetailsWeather infoWeather={placeFound} />
        </div>
      )}
    </div>
  );
};

export default Search;
