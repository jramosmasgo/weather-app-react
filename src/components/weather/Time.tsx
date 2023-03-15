import { ILocationWeather } from "@/types/currentLocation";
import React from "react";

interface TimeProps {
  infoTime: ILocationWeather;
}

const Time: React.FunctionComponent<TimeProps> = ({ infoTime }) => {
  return (
    <div className="temperature">
      <div className="details">
        <div className="city">
          <h1>Time:</h1>
          <span>{infoTime.localtime.split(" ")[0]}</span>
        </div>
        <div className="number">
          <h1>{infoTime.localtime.split(" ")[1]}</h1>
        </div>
      </div>
    </div>
  );
};

export default Time;
