import React from "react";
import { HashLink } from "react-router-hash-link";
import Typed from "react-typed";

const Header = () => {
  return (
    <>
      <section className="header-wrapper" id="home">
        <div className="main-info">
          <div className="main-info-content">
            <h1 className="header-h1">
              Dieke{" "}
              <span style={{ color: "#f5f5f5", fontSize: "5rem" }}>Sydney</span>
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
        </div>
      </section>
    </>
  );
};

export default Header;
