import React, { useState } from "react";
import Button from "./Button";

import './RemoveTestsButton.css'

function RemoveTestsButton() {
  const [testWrapperIsVisible, setTestWrapperIsVisible] = useState(true);
  const [fccTestElement] = useState(
    document.getElementById("fcc_test_suite_wrapper")
  );

  const handleRemoveTestPanel = () => {
    setTestWrapperIsVisible(!testWrapperIsVisible);
    fccTestElement.style.display = "none";

    const hideTestsButton = document.getElementById("hide-test-panel");
    hideTestsButton.style.display = "none";

    // Note: the landing page has a top navbar which would cover the test suite
    // the code below allow both to be shown (so tests can be ran) and removing the test suite allows
    // the landing page to be viewed as it is intended (stop the scrolling behind the test suite)

    const landingPageHeader = document.getElementsByClassName(
      "landing-page__header"
    );

    if (landingPageHeader.length === 1) {
      const topSection = document.getElementById("our-philosophy");
      landingPageHeader[0].style.top = 0;
      topSection.style.marginTop = 0;
    }
  };

  return (
    <div className="test-button-wrapper">
      <Button addId="hide-test-panel" onClick={handleRemoveTestPanel}>
        Remove Test Suite
      </Button>
    </div>
  );
}

export default RemoveTestsButton;
