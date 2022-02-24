import React from "react";
import spinner from "./img/spinner.gif";

function Spinner() {
  return (
    <div className="spinner-container">
      <div className="spinner-image-container">
        <img src={spinner} alt="loading" />
      </div>
    </div>
  );
}

export default Spinner;
