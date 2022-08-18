import React from "react";
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const SideFooter = () => {
  return (
    <>
      <section className="footer-wrapper">
        <div className="button-container">
          <div className="button">
            <a
              href="https://web.facebook.com/people/Dieke-Sydney/100081882726090/"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <div className="icons">
                <FaFacebook className="icon" />
              </div>
              Dieke Sydney
            </a>
          </div>
          <div className="button">
            <a
              href="https://twitter.com/DiekeSydney"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <div className="icons">
                <FaTwitter className="icon" />
              </div>
              &#64;DiekeSydney
            </a>
          </div>
          <div className="button">
            <a
              href="https://github.com/Sydney205"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <div className="icons">
                <FaGithub className="icon" />
              </div>
              Sydney205
            </a>
          </div>
          <div className="button">
            <a
              href="https://github.com/Sydney205"
              target={"_blank"}
              rel={"noreferrer"}
            >
              {" "}
              <div className="icons">
                <FaLinkedinIn className="icon" />
              </div>
              Dieke Sydney
            </a>
          </div>
        </div>
        <br />
        <p
          style={{
            color: "white",
            fontSize: "10px !important",
            opacity: "0.5",
          }}
        >
          &copy; All Rights reserved 2022.
        </p>
      </section>
    </>
  );
};

export default SideFooter;
