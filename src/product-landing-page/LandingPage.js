import React, { useContext, useEffect } from "react";
import Header from "./components/Header";
import Philosophy from "./components/Philosophy";
import AboutUs from "./components/AboutUs";
import OurSecret from "./components/OurSecret";
import Footer from "./components/Footer";
import TestButtonContext from "../components/context/TestButtonContext";

import "./LandingPage.css";
import ContactUs from "./components/ContactUs";

function LandingPage() {
  const { showRemoveButton } = useContext(TestButtonContext);

  useEffect(() => {
    showRemoveButton();
  }, [showRemoveButton]);

  // const closeModal = () => {
  //   setModalIsVisible(false);
  // };

  return (
    <>
      <div className="landing-page-wrapper">
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
