import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import "./MasterLayout.scss";

const MasterLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="master-container">
      <Sidebar
        showSidebar={showSidebar}
        toggleSidebar={() => setShowSidebar((prev) => !prev)}
      />
      <div className="main">
        <Header onMenuClick={() => setShowSidebar((prev) => !prev)} />
        <div className="body">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MasterLayout;
