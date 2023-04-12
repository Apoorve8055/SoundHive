import { Outlet } from "react-router-dom";
import "./MasterLayout.scss";
import Header from "../header/Header";
import { useCallback, useState } from "react";

const MasterLayout = () => {
  const [showSidebar, toggleShowSidebar] = useState(false);

  const handleMenuClick = useCallback(() => {
    toggleShowSidebar((prev) => !prev);
  }, []);

  return (
    <div className="master-container">
      <div className={`sidebar ${showSidebar && "open-menu"}`}>
        <h1 onClick={() => toggleShowSidebar(!showSidebar)}>Close Menu</h1>
        <h1>User Avatar - Name</h1>
        <h1>Sidebar</h1>
      </div>
      <div className="main">
        <Header onMenuClick={handleMenuClick} />
        <div className="body">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MasterLayout;
