import { ICurrentLocation } from "@/types/currentLocation";
import React from "react";
import AnimatedComponent from "../shared/animated/AnimatedComponent";
import "./weather.scss";

interface TemperatureProps {
  infoWeather: ICurrentLocation;
}

const Temperature: React.FunctionComponent<TemperatureProps> = ({
  infoWeather,
}) => {
  return (
    <div className="temperature">
      <div className="details">
        <div className="city">
          <AnimatedComponent ida={infoWeather.location.name}>
            <h2>{infoWeather.location.name}</h2>
          </AnimatedComponent>
          <AnimatedComponent ida={infoWeather.location.country}>
            <span>{infoWeather.location.country}</span>
          </AnimatedComponent>
        </div>
        <div className="number">
          <AnimatedComponent ida="numberTemperature">
            <h1>{infoWeather.current.temp_c}°</h1>
          </AnimatedComponent>
        </div>
      </div>
      <div className="icon">
        <img src={infoWeather.current.condition.icon} alt="" />
      </div>
    </div>
  );
};

export default Temperature;
