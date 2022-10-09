import React from "react";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";

const MERN = () => {
  return (
    <div className="Mern-skills">
      <div className="letter-M-container">
        <DiMongodb size='6rem'/>
        <h1 className="letter-M">M</h1>
        <h1>O</h1>
        <h1>N</h1>
        <h1>G</h1>
        <h1>O</h1>
      </div>

      <div className="letter-E-container">
        <SiExpress size='6rem'/>
        <h1 className="letter-E">E</h1>
        <h1>X</h1>
        <h1>P</h1>
        <h1>R</h1>
        <h1>E</h1>
        <h1>S</h1>
        <h1>S</h1>
      </div>

      <div className="letter-R-container">
        <FaReact size='6rem'/>
        <h1 className="letter-R">R</h1>
        <h1>E</h1>
        <h1>A</h1>
        <h1>C</h1>
        <h1>T</h1>
      </div>

      <div className="letter-N-continer">
        <FaNodeJs size='6rem'/>
        <h1 className="letter-N">N</h1>
        <h1>O</h1>
        <h1>D</h1>
        <h1>E</h1>
      </div>
    </div>
  );
};

export default MERN;
