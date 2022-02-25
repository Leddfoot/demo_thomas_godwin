import React from "react";
import QuoteResults from "./QuoteResults";
import Footer from "../components/UI/Footer/Footer";

import "./QuoteMachine.css";

function QuoteMachine() {
  return (
    <>
      <div className="quote-container" id="quote-box">
        <QuoteResults />
      </div>
      <Footer />
    </>
  );
}

export default QuoteMachine;
