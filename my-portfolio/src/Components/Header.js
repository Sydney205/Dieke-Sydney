import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <section className="header-wrapper" id="home">
      <div className="main-info">
        <h1 className="header-h1">Dieke Sydney</h1>
        <p className="bio">&#123; Software Engineer &#125;</p>{" "}
        <Typed
          className="typed-text"
          strings={[
            "Web development",
            "UI/UX Animations",
            "React Javascript Library",
          ]}
          typeSpeed={60}
          backSpeed={30}
          loop
        />{" "}
      </div>
    </section>
  );
};

export default Header;
