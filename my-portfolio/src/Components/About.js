import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";

class About extends Component {
  render() {
    return (
      <section
        className="about-wrapper"
        id="about"
        style={{ textAlign: "center" }}
      >
        <div className="about-main-content">
          <div>
            <h1>About ME!</h1>
            <p
              style={{
                color: "#222",
                fontFamily: "Lobster",
                // fontSize: "20px",
              }}
            >
              Click or hover the card below to see more about me...
            </p>
          </div>
          <div className="card">
            <div className="imgBx">
              <img
                src={process.env.PUBLIC_URL + "/Logo.PNG"}
                alt="Profile-pic"
              />
            </div>
            <div className="about-content">
              <div className="details">
                <h2>
                  Dieke Sydney
                  <span className="title">
                    <br />
                    &#123; Software Engineer &#125;
                  </span>
                </h2>

                <div className="data">
                  <p>
                    <span
                      style={{ fontWeight: "bold", color: "rgb(0, 162, 255)" }}
                    >
                      Hi! i'm Sydney
                    </span>
                    <br />
                    A FullStack developer and UI/UX javascript specialist and React.
                    <br />
                    I enjoy building everything from websites to rich
                    interactive apps.
                    <br />
                    So if you are a person or a buisness seeking web presence...
                  </p>
                </div>
                <div className="about-btn">
                  <button>
                    <HashLink
                      to="#contact"
                      style={{ textDecoration: "none", color: "white" }}
                      className='a'
                    >
                      {" "}
                      Hire Me
                    </HashLink>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
