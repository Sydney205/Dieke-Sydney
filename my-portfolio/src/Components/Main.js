import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";

function Main() {
  return (
    <div className="main">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default Main;
