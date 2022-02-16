import React, { useState, useContext } from "react";
import TestButtonContext from "../../context/TestButtonContext";
import Button from "./Button";
import RemoveTestsButton from "./RemoveTestsButton";

import "./TestButton.css";

function TestButton() {
  const [testSuiteIsVisible, setTestSuiteIsVisible] = useState(true);
  const [fccTestElement] = useState(document.getElementById("fcc_test_suite_wrapper"));
  const [testWrapperIsVisible] = useState(true);
  const {testButtonVisible} = useContext(TestButtonContext)
  const {hideButtons} = useContext(TestButtonContext)

  const toggleFCCTests = () => {
    setTestSuiteIsVisible(!testSuiteIsVisible);
    testSuiteIsVisible
      ? (fccTestElement.style.visibility = "hidden")
      : (fccTestElement.style.visibility = "visible");
  };

  return (
    <>
      {!testWrapperIsVisible ? null : (
        <div className="test-button-wrapper">
          <Button addId="fcc-test" onClick={toggleFCCTests}>
            Show/Hide Tests
          </Button>
          {testButtonVisible ? <RemoveTestsButton onClick={hideButtons} /> : null}
        </div>
      )}
    </>
  );
}

export default TestButton;
