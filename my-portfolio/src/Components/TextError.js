import React from "react";
import { MdCancel } from "react-icons/md";

function TextError(props) {
  return (
    <div className="error">
      <MdCancel /> {props.children}
    </div>
  );
}

export default TextError;
