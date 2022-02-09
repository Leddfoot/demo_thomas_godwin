import React from "react";
import Button from "./UI/Button/Button";

function FccTests() {
  let fccTestElement = document.getElementById("fcc_test_suite_wrapper");

  if (fccTestElement === null) { //for if internet is temporarily down, but doesn't check again anyways ... need to find out how to force refresh...or an await?
    const script = document.createElement("script");
    script.setAttribute("id", "fcc-script");
    script.setAttribute(
      "src",
      "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"
    );
    document.body.appendChild(script);
  }

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
    <div className="fcc-test-container">
      <Button className="fcc-test" onClick={getScript}>
        add
      </Button>
      <Button className="fcc-test" onClick={removeDom}>
        remove
      </Button>
    </div>
  );
}

export default FccTests;
