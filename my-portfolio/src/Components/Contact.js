import React from "react";
import { FaJava } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import MyForm from "./MyForm";

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
        <p
          style={{
            color: "white",
            fontSize: "15px !important",
            opacity: "0.5",
          }}
        >
          &copy; All Rights reserved 2022.
        </p>
        <Link to={"/Projects"}>Project Test</Link>
      </div>
    </section>
  );
}

export default Contact;
