import React from "react";
import { CgDarkMode } from "react-icons/cg";
import { AiOutlineUser } from "react-icons/ai";
import Button from "@/components/shared/buttons/Button";
import { useLocation } from "react-router";
import AnimatedComponent from "@/components/shared/animated/AnimatedComponent";

const Header: React.FunctionComponent = () => {
  const location = useLocation();

  return (
    <div className="header">
      <AnimatedComponent ida={location.state?.title}>
        <h2>{location.state?.title}</h2>
      </AnimatedComponent>
      <div className="options">
        <Button title="" type="danger" Icon={<CgDarkMode />} fn={() => {}} />
        <Button
          title="Login"
          type="primary"
          Icon={<AiOutlineUser />}
          fn={() => {}}
        />
      </div>
    </div>
  );
};

export default Header;
