import React from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const Navbar = (props) => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark p-md-3">
      <div className="nav-name">
        <span id="pro-name">
          Sydney's
          <span className="des"> Website</span>
        </span>
      </div>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style={{
          backgroundColor: "rgb(0, 162, 255)",
        }}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav ml-auto">
          <li>
            <NavHashLink to="#home" className="nav-item active">
              Home
            </NavHashLink>
          </li>
          <li>
            <NavHashLink to="#about" className="nav-item">
              About Me{" "}
            </NavHashLink>
          </li>
          <li>
            <NavHashLink to="#skills" className="nav-item">
              Skills
            </NavHashLink>
          </li>
          <li>
            <NavLink to={"/Projects"}>Project Test</NavLink>
          </li>
          <li>
            <NavHashLink to="#contact" className="nav-item">
              Contacts
            </NavHashLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
