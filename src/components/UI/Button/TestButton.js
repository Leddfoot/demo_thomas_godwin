import React, {useState} from "react";
import Button from "./Button";

import './TestButton.css'

function TestButton() {
  
  const [testSuiteIsVisible, setTestSuiteIsVisible] = useState(true)
  const [fccTestElement] = useState(document.getElementById("fcc_test_suite_wrapper"))
  const [testWrapperIsVisible, setTestWrapperIsVisible] = useState(true)
  

  const toggleFCCTests = () => {
    setTestSuiteIsVisible(!testSuiteIsVisible)
    testSuiteIsVisible ? fccTestElement.style.visibility = "hidden" : fccTestElement.style.visibility = "visible"
  };

  const logit=()=>{
    setTestWrapperIsVisible(!testWrapperIsVisible)
    fccTestElement.style.visibility = "hidden"

    const landingPageHeader = document.getElementsByClassName('landing-page__header')
    const topSection = document.getElementById('our-philosophy')
    landingPageHeader[0].style.top = 0
    topSection.style.marginTop = 0
  }
  return (
    <>
    {!testWrapperIsVisible ? null :     <div className="test-button-wrapper">
    <Button addClass="fcc-test" onClick={toggleFCCTests}>
     Show/Hide Tests
   </Button>
   <Button addClass="fcc-test" onClick={logit}>
   Hide Us!
   </Button>
 </div>}
    </>
  )

}

export default TestButton;
