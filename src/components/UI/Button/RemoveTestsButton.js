import React, { useState } from 'react'
import Button from './Button'

function RemoveTestsButton() {
  const [testWrapperIsVisible, setTestWrapperIsVisible] = useState(true);
  const [fccTestElement] = useState(document.getElementById("fcc_test_suite_wrapper"));
  
    //Note: This button is only used on the landing page, to show styling without all that test suite stuff in the way
    const handleRemoveTestPanel=()=>{
        setTestWrapperIsVisible(!testWrapperIsVisible)
        fccTestElement.style.visibility = "hidden"
    
        const landingPageHeader = document.getElementsByClassName('landing-page__header')
        const topSection = document.getElementById('our-philosophy')
        landingPageHeader[0].style.top = 0
        topSection.style.marginTop = 0
      }

  return (
    <Button addId="hide-test-panel" onClick={handleRemoveTestPanel}>Remove Top Bar</Button>
  )
}

export default RemoveTestsButton