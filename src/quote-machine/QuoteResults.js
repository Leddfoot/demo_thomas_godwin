import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";

function QuoteResults() {
  const [isLoading, setIsLoading] = useState(true);
  const [quote, setQuote] = useState({});
  const [quoteList, setQuoteList] = useState({});

  useEffect(() => {
    FetchQuoteList();
  }, []);

  const FetchQuoteList = async () => {
    const response = await fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    );

    const { quotes } = await response.json();
    setIsLoading(false);
    setQuoteList(quotes)
    const randomNumber = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomNumber]);

  };

  const setNewQuote =()=> {
  const randomNumber = Math.floor(Math.random() * quoteList.length);
  setQuote(quoteList[randomNumber]);
  }

  if (!isLoading) {
    return (
      <div className="quote-area">
        {isLoading ? <Spinner /> : null}
        <p>{quote.quote}</p>
        <p>{quote.author}</p>
        <button onClick={setNewQuote}>Get a new quote</button>
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default QuoteResults;
