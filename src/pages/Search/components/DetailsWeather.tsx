import React from "react";
import { ICurrentLocation } from "@/types/currentLocation";
import Temperature from "@/components/weather/Temperature";
import DetailsCard from "@/components/weather/DetailsCard";

interface DetailsWeather {
  infoWeather: ICurrentLocation;
}

const DetailsWeather: React.FunctionComponent<DetailsWeather> = ({
  infoWeather,
}) => {
  return (
    <div className="search_body-details">
      <Temperature infoWeather={infoWeather} styleName="main-info" />
      <DetailsCard />
    </div>
  );
};

export default DetailsWeather;
