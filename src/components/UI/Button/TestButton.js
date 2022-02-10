import React from "react";
import Button from "./Button";

import './TestButton.css'

function TestButton() {
    
  let fccTestElement = document.getElementById("fcc_test_suite_wrapper") 

  const getScript = () => {
    fccTestElement = document.getElementById("fcc_test_suite_wrapper");
    if (fccTestElement != null) {
      fccTestElement.style.visibility = "visible";
    } else {
      console.log("Not connected, cant get the FCC test suite CDN");
    }
  };

  const removeDom = () => {
    fccTestElement = document.getElementById("fcc_test_suite_wrapper");
    if (fccTestElement != null) {
      fccTestElement.style.visibility = "hidden";
    } else {
      console.log("Not connected, cant get the FCC test suite CDN");
    }
  };
  return (
    <div className="test-button-wrapper">
    <Button addClass="fcc-test" onClick={getScript}>
      add
    </Button>
    <Button addClass="fcc-test" onClick={removeDom}>
      remove
    </Button>
  </div>
  )

}

export default TestButton;
