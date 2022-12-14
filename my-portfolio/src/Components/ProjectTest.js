import React from "react";
import SignUp from "./SignUp";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import DefaultNav from "./DefaultNav";

function ProjectTest() {
  const navigate = useNavigate();
  return (
    <div className="projects-wrapper">
      <DefaultNav />
      <div>
        <SignUp />

        <button className="exit-btn" onClick={() => navigate(-1)}>
          <FaChevronLeft />
          Go back
        </button>
      </div>
    </div>
  );
}

export default ProjectTest;
