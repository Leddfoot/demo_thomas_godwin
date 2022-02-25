import React, { useState, useEffect } from "react";
import { FaTwitter } from "react-icons/fa";
import Spinner from "./Spinner";

function QuoteResults() {
  const [isLoading, setIsLoading] = useState(true);
  const [quote, setQuote] = useState({});
  const [quoteLength, setQuoteLength] = useState(0);
  const [quoteList, setQuoteList] = useState({});

  useEffect(() => {
    FetchQuoteList();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    adjustFontSize();
    // eslint-disable-next-line
  }, [quoteLength]);

  const FetchQuoteList = async () => {
    const response = await fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    );

    const { quotes } = await response.json();
    setIsLoading(false);
    setQuoteList(quotes);
    const randomNumber = Math.floor(Math.random() * quotes.length);
    const quoteToDisplay = quotes[randomNumber];
    setQuote(quoteToDisplay);
    
    adjustFontSize();
  };

  const setNewQuote = () => {
    const randomNumber = Math.floor(Math.random() * quoteList.length);
    const quoteToDisplay = quoteList[randomNumber];
    const quoteToDisplayLength = quoteToDisplay.quote.length;
    setQuoteLength(quoteToDisplayLength);
    setQuote(quoteList[randomNumber]);
  };

  const adjustFontSize = () => {
    if (document.getElementById("text") === null) {
      return;
    }

    let viewportWidth = window.innerWidth
    let quoteFontSize = "";
    let fontMultiplier = 1.5

    if (viewportWidth > 1000) {
      fontMultiplier = 2
    } else if (viewportWidth > 700) {
      fontMultiplier = 1.8
      
    }

    if (quoteLength < 45) {
      quoteFontSize = fontMultiplier * 2 + 'rem';
    } else if (quoteLength < 100) {
      quoteFontSize = fontMultiplier * 1.5 + 'rem';
    } else if (quoteLength < 130){
      quoteFontSize = fontMultiplier * 1.3 + 'rem';
    } else {
      quoteFontSize = fontMultiplier * 1 + 'rem';
    }
    document.getElementById("text").style.fontSize = quoteFontSize;
  };

  if (!isLoading) {
    return (
      <div className="quote-area">
        {isLoading ? <Spinner /> : null}
        <div className="quote-author">
          <p id="text">{quote.quote}</p>
          <p id="author">{quote.author}</p>
        </div>
        <div className="button-container">
          <button onClick={setNewQuote} id="new-quote" className="button">
            Get a new quote
          </button>
          <a
            data-text={quote}
            id="tweet-quote"
            href="https://twitter.com/intent/tweet"
            className="twitter-hashtag-button"
            data-show-count="false"
          >
            <button className="button">
              <FaTwitter />
              Tweet
            </button>
          </a>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          ></script>
          <a href="https://unsplash.com/@rohitdsilva?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Photo by Rohit D'Silva on Unsplash</a>
        </div>
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default QuoteResults;
