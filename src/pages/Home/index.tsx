import { getLocation } from "@/api/LocationService";
import { getWeatherByLocation } from "@/api/WeatherServices";
import React, { useEffect } from "react";

const Home: React.FunctionComponent = () => {
  const getDataWeather = async () => {
    const data = await getWeatherByLocation("London");
    console.log(data);
    await getLocation();
  };

  useEffect(() => {
    getDataWeather();
    // if (navigator?.geolocation) {
    //   navigator.geolocation.((location) => {
    //     if (location) {
    //       console.log("mi location", location);
    //     }
    //   });
    // }
  }, []);

  return <div>Home</div>;
};

export default Home;
