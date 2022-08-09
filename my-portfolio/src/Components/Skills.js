import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCss3, FaHtml5, FaJs, FaPhp, FaReact } from "react-icons/fa";
import { MdOutlineChevronRight } from "react-icons/md";
import { AiOutlineConsoleSql } from "react-icons/ai";

function Skills() {
  const navigate = useNavigate();

  return (
    <section className="Skills-wrapper" id="skills">
      <div className="main-info3">
        <h1 className="skill-section-h1">Here's what i do...</h1>
        <h3 className="bio2">
          FrontEnd and BackEnd. From Web Components and UI/UX animations to
          React.JS
        </h3>
        <br />
        <h3 color="rgb(0, 162, 255)">Languages i speak...</h3>

        <div className="skills-icon-wrapper">
          <div id="html-icon" className="icons-box">
            <FaHtml5 size={"6rem"} color="#f23" className="icons" />{" "}
            <div className="icon-tiles">
              <h3 className="lang-title">
                <span className="code-brackets">&#60;</span>HTML5{" "}
                <span className="code-brackets">&frasl;&#62;</span>
              </h3>
              <p>Building block of every webpage</p>
            </div>
          </div>

          <div id="css-icon" className="icons-box">
            <FaCss3 size={"6rem"} color="rgb(0, 162, 255)" className="icons" />
            <div className="icon-tiles">
              <h3 className="lang-title">
                <span className="code-brackets">&#123;</span> CSS
                <span className="code-brackets">:</span>3
                <span className="code-brackets">;</span>{" "}
                <span className="code-brackets">&#125;</span>
              </h3>
              <p>StyleSheet</p>
            </div>
          </div>

          <div id="javascript-icon" className="icons-box">
            <FaJs size={"6rem"} color="yellow" className="icons" />
            <div className="icon-tiles">
              <h3 className="lang-title">
                {" "}
                <span className="code-brackets">&#123;</span> Javascript{" "}
                <span className="code-brackets">&#125;</span>
              </h3>
              <p>Interactive effects within web browsers.</p>
            </div>
          </div>

          <div id="php-icon" className="icons-box">
            <FaPhp size={"6rem"} color="#3355aa" className="icons" />
            <div className="icon-tiles">
              <h3 className="lang-title">
                {" "}
                <span className="code-brackets">&#60;?</span>PHP{" "}
                <span className="code-brackets">&#62;</span>
              </h3>
              <p>server side scripting</p>
            </div>
          </div>

          <div id="sql-icon" className="icons-box">
            <AiOutlineConsoleSql
              size={"6rem"}
              color="orange"
              id="bottom-icon"
              className="icons"
            />
            <div className="icon-tiles">
              <h3 className="lang-title">
                {" "}
                <span className="code-brackets">&#40; </span>SQL{" "}
                <span className="code-brackets">&#41;</span>
              </h3>
              <p>Web database</p>
            </div>
          </div>

          <div className="icons-box">
            <FaReact
              size={"6rem"}
              color="#61dafb"
              id="react-icon"
              className="icons"
            />
            <div className="icon-tiles">
              <h3 className="lang-title">
                {" "}
                <span className="code-brackets">&#123;</span> React{" "}
                <span className="code-brackets">&#125;</span>
              </h3>
              <p>For a very responsive website</p>
            </div>
          </div>
        </div>
        <button className="project-btn" onClick={() => navigate("Projects")}>
          Project Test <MdOutlineChevronRight />
        </button>
        <br />
        <br />
      </div>

      <p
        style={{
          fontStyle: "italic",
          color: "rgb(0, 162, 255)",
          textAlign: "center",
        }}
      >
        Living, learning
        <br /> and <br /> leveling up one day at a time.
      </p>
    </section>
  );
}

export default Skills;
