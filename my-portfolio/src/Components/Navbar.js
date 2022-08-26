import React, { useState, useEffect } from "react";
import { NavHashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import SideNav from "./SideNav";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [wid, setWid] = useState("-100%");
  const [navbar, setNavbar] = useState("");

  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 66) {
      setNavbar("rgba(0, 0, 0, 0.9)");
    } else {
      setNavbar("");
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  const openSidenav = () => {
    setWid("0");
  };
  const closeSidenav = () => {
    setWid("-100%");
  };

  return (
    <nav
      className="navbar fixed-top navbar-expand-lg navbar-dark p-md-3"
      style={{ backgroundColor: `${navbar}` }}
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

        <div
          // className="collapse navbar-collapse justify-content-center"
          // id="navbarSupportedContent"
          className="navbar-links"
        >
          <ul className="nav-ul">
            <li>
              <NavHashLink to="#home" className="nav-item">
                Home
              </NavHashLink>
            </li>
            <li>
              <NavHashLink to="#about" className="nav-item">
                About Me
              </NavHashLink>
            </li>
            <li>
              <NavHashLink to="#skills" className="nav-item">
                Skills
              </NavHashLink>
            </li>
            <li>
              <NavHashLink to="#contact" className="nav-item">
                Contact
              </NavHashLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
