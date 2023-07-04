import { ICurrentLocation } from "@/types/currentLocation";
import React from "react";
import AnimatedComponent from "../shared/animated/AnimatedComponent";
import "./weather.scss";

interface TemperatureProps {
  infoWeather: ICurrentLocation;
  styleName?: string;
}

const Temperature: React.FunctionComponent<TemperatureProps> = ({
  infoWeather,
  styleName,
}) => {
  return (
    <div className={`card-details ${styleName}`}>
      <div className="title">
        <AnimatedComponent ida={infoWeather.location.name}>
          <h2>
            {infoWeather.location.name}, {infoWeather.location.country}
          </h2>
        </AnimatedComponent>
      </div>
      <div className="line-separator"></div>
      <div className="details">
        <div className="temperature">
          <AnimatedComponent
            ida={infoWeather.current.condition.code.toString()}
          >
            <img src={infoWeather.current.condition.icon} alt="" />
          </AnimatedComponent>
          <AnimatedComponent ida={infoWeather.current.temp_c.toString()}>
            <h1>{infoWeather.current.temp_c}°</h1>
          </AnimatedComponent>
        </div>
        <div className="description">
          <AnimatedComponent ida={infoWeather.location.localtime}>
            <p>
              {infoWeather.location.localtime
                .split(" ")[0]
                .replaceAll("-", "/")}{" "}
              - {infoWeather.location.tz_id}
            </p>
          </AnimatedComponent>
          <AnimatedComponent ida={infoWeather.location.localtime}>
            <h1>{infoWeather.location.localtime.split(" ")[1]}</h1>
          </AnimatedComponent>
        </div>
      </div>
    </div>
  );
};

export default Temperature;
