import { getWeatherByLocation } from "@/api/WeatherServices";
import MapView from "@/components/weather/MapView";
import Temperature from "@/components/weather/Temperature";
import Time from "@/components/weather/Time";
import { ICurrentLocation } from "@/types/currentLocation";
import React from "react";
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
      <div className="head">
        <InputSearchPlace onClickPlace={(lat, lng) => getWeather(lng, lat)} />
      </div>
      <div className="content">
        {placeFound && (
          <div className="items">
            <MapView
              classStyle="map"
              latitude={placeFound?.location.lat}
              longitude={placeFound?.location.lon}
            />
            <div className="info">
              <Temperature infoWeather={placeFound} />
            </div>
            <div className="info">
              <Time infoTime={placeFound.location} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
