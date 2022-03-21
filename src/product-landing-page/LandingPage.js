import React, { useState } from "react";
import Header from "./components/Header";
import Philosophy from "./components/Philosophy";
import AboutUs from "./components/AboutUs";
import OurSecret from "./components/OurSecret";
import Footer from "../components/UI/Footer/Footer";
import LPModal from "../components/UI/Modals/LPModal";

import "./LandingPage.css";
import ContactUs from "./components/ContactUs";

function LandingPage() {

  const [ modalIsVisible, setModalIsVisible ] = useState(true);
  const closeModal = () => {
    setModalIsVisible(false);
  };

  return (
    <>
      <div className="landing-page-wrapper">
      
      {!modalIsVisible ? null : <LPModal closeModal={closeModal}/>}
        <Header />
        <div className="landing-page__main-content-wrapper">
          <Philosophy />
          <AboutUs />
          <OurSecret />
          <ContactUs />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
