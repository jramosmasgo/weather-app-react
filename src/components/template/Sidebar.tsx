import { menuItems } from "@/config/menu/itemsMenu";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./template.scss";

const Sidebar: React.FunctionComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string): string =>
    location.pathname.replace("/", "") !== path ? "" : "active";

  return (
    <div className="sidebar">
      <div className="title"></div>
      <div className="menu">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`option ${isActive(item.path)}`}
            onClick={() =>
              navigate(item.path, {
                state: {
                  title: item.name,
                },
              })
            }
          >
            <item.icon />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
