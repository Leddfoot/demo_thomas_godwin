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

    const landingPageHeader = document.getElementsByClassName("landing-page__header");

    if (landingPageHeader.length === 1) {
      const topSection = document.getElementById("our-philosophy");
      landingPageHeader[0].style.top = 0;
      topSection.style.marginTop = 0;
    }

    const quoteContainer = document.getElementsByClassName("quote-container");
    
    if (quoteContainer.length === 1) {
      quoteContainer[0].style.top = 0;
      quoteContainer[0].style.marginTop = 0;
    }
    
    const drumWrapper = document.getElementsByClassName("drum-wrapper");
    const drumTitle = document.getElementsByClassName("drum-machine--title");

    if (drumWrapper.length === 1) {
      drumWrapper[0].style.top = 0;
      drumWrapper[0].style.marginTop = 0;
      drumTitle[0].style.marginTop = 0;
    }


    const markdownWrapper = document.getElementsByClassName("markdown-wrapper");
    const markdownTitle = document.getElementsByClassName("markdown--title");

    if (markdownWrapper.length === 1) {
      markdownWrapper[0].style.top = 0;
      markdownWrapper[0].style.marginTop = 0;
      markdownTitle[0].style.marginTop = 0;
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
