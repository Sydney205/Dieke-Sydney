import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideNav from "./SideNav";
import { FaBars } from "react-icons/fa";

const DefaultNav = () => {
  const [wid, setWid] = useState("-100%");

  const openSidenav = () => {
    setWid("0");
  };
  const closeSidenav = () => {
    setWid("-100%");
  };

  return (
    <nav
      className="navbar fixed-top navbar-expand-lg navbar-dark p-md-3"
      // style={{ backgroundColor: `${navbar}` }}
    >
      <div className="nav-items">
        <div className="menu-bars">
          <div>
            <Link to="#">
              <FaBars onClick={openSidenav} />
            </Link>
          </div>
        </div>
        <SideNav left={wid} closeSidenav={closeSidenav} />
      </div>
    </nav>
  );
};

export default DefaultNav;
