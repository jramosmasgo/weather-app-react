import { HalfMoonIcon, SunIcon } from "@/assets/icons/icons";
import { ILocationWeather } from "@/types/currentLocation";
import React from "react";
import AnimatedComponent from "../shared/animated/AnimatedComponent";

interface TimeProps {
  infoTime: ILocationWeather;
}

const Time: React.FunctionComponent<TimeProps> = ({ infoTime }) => {
  console.log(new Date(infoTime.localtime).getHours());

  return (
    <div className="temperature">
      <div className="details">
        <div className="city">
          <h1>Local Time</h1>
          <AnimatedComponent ida={infoTime.localtime}>
            <span>{infoTime.localtime.split(" ")[0]}</span>
          </AnimatedComponent>
        </div>
        <div className="number">
          <AnimatedComponent ida={infoTime.localtime}>
            <h1>{infoTime.localtime.split(" ")[1]}</h1>
          </AnimatedComponent>
        </div>
      </div>
      <div className="icon">
        <img
          className="icon-time"
          src={
            new Date(infoTime.localtime).getHours() >= 5 &&
            new Date(infoTime.localtime).getHours() <= 18
              ? SunIcon
              : HalfMoonIcon
          }
        />
      </div>
    </div>
  );
};

export default Time;
