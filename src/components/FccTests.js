import React from "react";

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



  return (
    <></>
  );
}

export default FccTests;
