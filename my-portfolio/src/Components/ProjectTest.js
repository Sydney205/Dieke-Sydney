import React from "react";
import SignUp from "./SignUp";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

function ProjectTest() {
  const navigate = useNavigate();
  return (
    <div className="projects-wrapper" id="project">
      <div>
        <h1>Projects</h1>
        <SignUp />

        <button
          style={{
            width: "7vw",
            height: "40px",
            textAlign: "center",
            padding: "5px",
          }}
          onClick={() => navigate(-1)}
        >
          <FaChevronLeft />
          Go back
        </button>
      </div>
    </div>
  );
}

export default ProjectTest;
