import React, { useState } from "react";
import Avatar from "react-avatar";
import {
  IoAtCircle,
  IoClose,
  IoDocumentText,
  IoHomeSharp,
  IoLogOut,
  IoPerson,
} from "react-icons/io5";
import "./Sidebar.scss";

const SideMenu = [
  { name: "Home", url: "/dashboard", icon: IoHomeSharp },
  { name: "Space Creation", url: "/", icon: IoDocumentText },
  { name: "User Profile", url: "/profile", icon: IoPerson },
  { name: "About", url: "/", icon: IoAtCircle },
];

const Sidebar = ({ showSidebar, toggleSidebar }) => {
  const [activeMenu, setActiveMenu] = useState(0);

  const handleActiveMenu = (index) => {
    setActiveMenu(index);
    toggleSidebar();
  };

  return (
    <div className={`sidebar ${showSidebar ? "open-menu" : ""}`}>
      <div className="menu">
        <div className="top-menu">
          <div className="close-btn-wrapper">
            <div className="user-img-name">
              <Avatar name="Foo Bar" size="40" round={true} />
              <div className="name">Apoorve </div>
            </div>
            <IoClose className="close-icon" onClick={toggleSidebar} />
          </div>
          <div className="sidebar-menu">
            {SideMenu.map((data, index) => (
              <div
                key={index}
                className={`sidebar-menu-wrapper ${
                  activeMenu === index && "active-menu"
                }`}
                onClick={() => handleActiveMenu(index)}
              >
                <data.icon
                  className={`sidebar-menu-icon ${
                    activeMenu === index ? "active" : ""
                  }`}
                />
                {data.name}
              </div>
            ))}
          </div>
        </div>
        <div className="logout-menu">
          <IoLogOut className="logout-menu-icon" /> Log Out
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
