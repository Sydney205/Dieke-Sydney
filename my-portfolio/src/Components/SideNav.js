import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome, AiOutlineClose } from "react-icons/ai";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { FiGrid } from "react-icons/fi";

const SideNav = (props) => {
  return (
    <>
      <div className="sidebar" style={{ left: `${props.left}` }}>
        <div>
          <ul className="sidebar-menu-items" onClick={props.closeSidenav}>
            <li>
              <div className="top-sidebar-menu">
                <span id="pro-name">
                  Sydney's
                  <span className="des"> Website</span>
                </span>

                <div className="sidebar-toogle">
                  <Link to="#">
                    <AiOutlineClose onClick={props.closeSidenav} size="2rem" />
                  </Link>
                </div>
              </div>
            </li>
            <li className="sidebar-text">
              <Link to="/">
                <span
                  style={{
                    marginRight: "30px",
                    marginLeft: `${props.iconsLeft}`,
                  }}
                >
                  <AiFillHome size={"1.5rem"} className="sidebar-icons" />
                </span>
                <span>Home</span>
              </Link>
            </li>
            <li className="sidebar-text">
              <Link to="/Projects">
                <span
                  style={{
                    marginRight: "30px",
                    marginLeft: `${props.iconsLeft}`,
                  }}
                >
                  <FiGrid size={"1.5rem"} className="sidebar-icons" />
                </span>
                <span>Projects</span>
              </Link>
            </li>
            <li className="sidebar-text">
              <a
                href="https://github.com/Sydney205"
                target={"_blank"}
                rel="noreferrer"
              >
                <span
                  style={{
                    marginRight: "30px",
                    marginLeft: `${props.iconsLeft}`,
                  }}
                >
                  <FaGithub size={"1.5rem"} className="sidebar-icons" />
                </span>
                <span>GitHub</span>
              </a>
            </li>
            <li className="sidebar-text">
              <Link to="#">
                <span
                  style={{
                    marginRight: "30px",
                    marginLeft: `${props.iconsLeft}`,
                  }}
                >
                  <FaWhatsapp size={"1.5rem"} className="sidebar-icons" />
                </span>
                <span>08179326606</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="profile" style={{ left: `${props.profileLeft}` }}>
          <div className="profile-img">
            <img src={process.env.PUBLIC_URL + "/Logo.jpg"} alt="Profile-pic" />
          </div>
          <div className="profile-content">
            <h4>Dieke Sydney</h4>
            <p>&#123; Software Engineer &#125;</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
