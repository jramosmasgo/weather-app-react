import { getLocation } from "@/api/LocationService";
import { getWeatherByLocation } from "@/api/WeatherServices";
import { WeatherContext } from "@/context/WeatherContext";
import React, { useContext, useEffect } from "react";

const Home: React.FunctionComponent = () => {
  const { state } = useContext(WeatherContext);
  useEffect(() => {
    // if (navigator?.geolocation) {
    //   navigator.geolocation.((location) => {
    //     if (location) {
    //       console.log("mi location", location);
    //     }
    //   });
    // }
  }, []);

  return (
    <div>
      Ubication: {state.myPlace.name} - {state.myPlace.country}{" "}
    </div>
  );
};

export default Home;
