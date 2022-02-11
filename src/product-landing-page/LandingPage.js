import React from "react";
import Header from "./components/Header";
import Philosophy from "./components/Philosophy";
import AboutUs from "./components/AboutUs";
import OurSecret from "./components/OurSecret";
import Footer from "./components/Footer";

import "./LandingPage.css";
import ContactUs from "./components/ContactUs";

function LandingPage() {
  return (
    <div className="landing-page-wrapper">
      <Header />
      <Philosophy />
      <AboutUs />
      <OurSecret />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default LandingPage;
