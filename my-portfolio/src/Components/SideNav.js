import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="sideNav">
      <h1>Items</h1>
      <Link>Component one</Link>
      <Link>Component two</Link>
      <Link>Component three</Link>
    </div>
  );
};

export default SideNav;
