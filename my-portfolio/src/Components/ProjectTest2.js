import React from "react";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import DefaultNav from "./DefaultNav";

function ProjectTest2() {
  const navigate = useNavigate();
  return (
    <div className="projects-wrapper">
      <DefaultNav />
      <div>
        <Login />

        <button className="exit-btn" onClick={() => navigate(-1)}>
          <FaChevronLeft />
          Go back
        </button>
      </div>
    </div>
  );
}

export default ProjectTest2;
