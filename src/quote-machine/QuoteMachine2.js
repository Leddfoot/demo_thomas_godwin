import React, { useState, useEffect } from "react";
import Button from "../components/UI/Button/Button";

function QuoteMachine2() {
  const [quotes, setQuotes] = useState([
    {
      quote: "loading",
      author: "loading",
    },
  ]);
  const [quote, setQuote] = useState("Loading");
  const [author, setAuthor] = useState("Loading");

  useEffect(() => {
    //Get Cors here when doing fetch.then() but not async??
    async function fetchQuotesHandler() {
      const response = await fetch(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      );
      const data = await response.json();

      setQuotes(data.quotes);
    }
    fetchQuotesHandler();
  }, []);

  useEffect(() => {
    setQuote(quotes[0].quote);
    setAuthor(quotes[0].author);
  }, [quotes]);

  const setDisplayQuote = () => {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomNumber].quote);
    setAuthor(quotes[randomNumber].author);
  };



  return (
    <div className="quote-container">
      <div className="quote-area">
      <h1>{quote}</h1>
      <h1>{author}</h1>
        <Button  onClick={setDisplayQuote}>get a quote</Button>
      </div>
    </div>
  );
}

export default QuoteMachine2;
