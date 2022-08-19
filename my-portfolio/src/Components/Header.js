import React from "react";
import { HashLink } from "react-router-hash-link";
import Typed from "react-typed";

const Header = () => {
  return (
    <section className="header-wrapper" id="home">
      <div className="main-info">
        <h1 className="header-h1">
          Dieke{" "}
          <span style={{ color: "rgb(0, 162, 255)", fontSize: "5rem" }}>
            Sydney
          </span>
        </h1>
        <br />
        <p className="bio">&#123; Software Engineer &#125;</p>{" "}
        <Typed
          className="typed-text"
          strings={[
            "Web development",
            "UI/UX Animations",
            "JavaScript Specialist",
          ]}
          typeSpeed={60}
          backSpeed={30}
          loop
        />{" "}
        <br />
        <button>
          <HashLink to="#about">About ME!</HashLink>
        </button>
      </div>
    </section>
  );
};

export default Header;
