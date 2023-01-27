import React from "react";
import Header from "@/components/template/Header";
import Footer from "@/components/template/Footer";
import "./styles.scss";
import { Outlet } from "react-router";
import Sidebar from "@/components/template/Sidebar";

const Main: React.FunctionComponent = () => {
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
