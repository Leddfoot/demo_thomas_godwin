import React from "react";
import QuoteResults from "./QuoteResults";

import './QuoteMachine.css'

function QuoteMachine() {
  return (
    <div className="quote-container" id="quote-box">
      <QuoteResults />
    </div>
  );
}

export default QuoteMachine;
