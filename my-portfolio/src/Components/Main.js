import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from './Footer'
import SideNav from "./SideNav";

function Main() {
  return (
    <div>
      <SideNav />
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default Main;
