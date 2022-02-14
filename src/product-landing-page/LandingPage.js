import React, { useState } from "react";
import Header from "./components/Header";
import Philosophy from "./components/Philosophy";
import AboutUs from "./components/AboutUs";
import OurSecret from "./components/OurSecret";
import Footer from "./components/Footer";
// import LPModal from "../components/UI/Modals/LPModal";
import Button from "../components/UI/Button/Button";

import "./LandingPage.css";
import ContactUs from "./components/ContactUs";

function LandingPage() {
  // const [modalIsVisible, setModalIsVisible] = useState(false);
  const [buttonIsVisible] = useState(true)

  // const closeModal = () => {
  //   setModalIsVisible(false);
  // };

  const removeTests =()=>{
    const fccTestElement = document.getElementById("fcc_test_suite_wrapper")
    fccTestElement.style.visibility = "hidden"
    const testButtonsWrapper = document.getElementsByClassName('test-button-wrapper')
    console.log('testButtonsWrapper: ', testButtonsWrapper);
    testButtonsWrapper[0].style.visibility = 'hidden'

    // const landingPageHeader = document.getElementsByClassName('landing-page__header')
    // const topSection = document.getElementById('our-philosophy')
    // landingPageHeader[0].style.top = 0
    // topSection.style.marginTop = 0
  }



  return (
    <>
      <div className="landing-page-wrapper">
      

        <Header />
        
        <Philosophy />
        { buttonIsVisible ? <Button id='clear-top-junk' onClick={removeTests} className="button--remove-tests">bla bldasfdfdfdasfda a</Button> : null}
        <AboutUs />
        <OurSecret />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;


