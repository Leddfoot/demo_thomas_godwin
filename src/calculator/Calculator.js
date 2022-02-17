import React from "react";
import { DisplayContextProvider } from "./store/display-context";
import MainContainer from "./components/MainContainer";
import Footer from "../components/UI/Footer/Footer"

import "./Calculator.css";

function Calculator() {
  return (
    <DisplayContextProvider>
      <div className="calculator-main-wrapper">
        <MainContainer />
      </div>
      <Footer />
    </DisplayContextProvider>
  );
}

export default Calculator;
