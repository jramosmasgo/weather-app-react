import React, { useContext, useEffect } from "react";
import Header from "@/components/template/Header";
import Footer from "@/components/template/Footer";
import "./styles.scss";
import { Outlet } from "react-router";
import Sidebar from "@/components/template/Sidebar";
import { getLocation } from "@/api/LocationService";
import { getWeatherByLocation } from "@/api/WeatherServices";
import { WeatherContext } from "@/context/WeatherContext";
import { ActionTypes } from "@/types/actions";

const Main: React.FunctionComponent = () => {
  const { state, dispatch } = useContext(WeatherContext);
  const getDataWeather = async () => {
    const myLocation = await getLocation();
    const data = await getWeatherByLocation(myLocation.city);
    dispatch({ type: ActionTypes.SET_LOCATION, payload: data.data.location });
    console.log(state);
  };

  useEffect(() => {
    getDataWeather();
  }, []);

  return (
    <div className="main">
      <Sidebar />
      <div className="content">
        <Header />
        <div className="outlet">
          <Outlet />
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Main;
