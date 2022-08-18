import React from "react";
import { FaJava } from "react-icons/fa";
import MyForm from "./MyForm";
import Footer from "./Footer";

function Contact() {
  return (
    <section className="contact-wrapper" id="contact">
      <div className="main-info4">
        <h1>Let's do business together...</h1>
        <h2 style={{ color: "white", textAlign: "center" }}>
          How would you like your coffee
          <FaJava color="white" size={"3rem"} />
        </h2>
        <h3 style={{ fontStyle: "italic", opacity: "0.5" }}>Send me a Mail</h3>
        <MyForm />
        <Footer />
      </div>
    </section>
  );
}

export default Contact;
