import React from "react";

import landingPage from "../../img/landingPage.png";
import landingPageMobile from "../../img/landingPage-mobile.jpg";
import vinmonpolet from "../../img/vinmonopolet.png";
import vinmonpoletMobile from "../../img/vinmonopolet-mobile.png";
import docs from "../../img/docs.png";
import docsMobile from "../../img/docs-mobile.jpg";
import pomodoro from "../../img/pomodoro.png";
import pomodoroMobile from "../../img/pomodoro-mobile.jpg";
import survey from "../../img/survey.png";
import surveyMobile from "../../img/survey-mobile.jpg";
import quote from "../../img/quote.png";
import quoteMobile from "../../img/quote-mobile.jpg";

function PortfolioSection() {
  return (
    <>
      <div className="portfolio-wrapper">
        <h1>My Stuff</h1>

        <div className="portfolio-section">
          <h1>Oh SH!T! is my vinmonopolet still open?!?</h1>
          <div className="image-container">
            <img
              className="vinmonopolet--img"
              src={vinmonpolet}
              alt="view of vinmopolet page"
            />
            <img
              src={vinmonpoletMobile}
              className="mobile vinmonopolet--img"
              alt="view of mobile vinmopolet page"
            />
          </div>

          <div className="portfolio__description">
            <p>
              bla blabla blab balblba bla balb balblab bla b.bla blabla blab
              balblba bla balb balblab bla b.bla blabla blab balblba bla balb
              balblab bla bbla blabla blab balblba bla balb balblab bla b.bla
              blabla blab balblba bla balb balblab bla bbla blabla blab balblba
              bla balb balblab bla b
            </p>
          </div>
        </div>

        <div className="portfolio-section">
          <h1>Easy Cors Fix Documentation Page</h1>

          <div className="image-container">
            <img src={docs} alt="view of easy cors fix documentation page" />
            <img
              src={docsMobile}
              className="mobile"
              alt="view of easy cors fix documentation mobile page"
            />
          </div>

          <div className="portfolio__description">
            <p>
              bla blabla blab balblba bla balb balblab bla b.bla blabla blab
              balblba bla balb balblab bla b.bla blabla blab balblba bla balb
              balblab bla bbla blabla blab balblba bla balb balblab bla b.bla
              blabla blab balblba bla balb balblab bla bbla blabla blab balblba
              bla balb balblab bla b
            </p>
          </div>
        </div>

        <div className="portfolio-section">
          <h1>Product Landing Page</h1>

          <div className="image-container">
            <img src={landingPage} alt="view of easy cors fix documentation page" />
            <img
              src={landingPageMobile}
              className="mobile"
              alt="view of easy cors fix documentation mobile page"
            />
          </div>

          <div className="portfolio__description">
            <p>
              bla blabla blab balblba bla balb balblab bla b.bla blabla blab
              balblba bla balb balblab bla b.bla blabla blab balblba bla balb
              balblab bla bbla blabla blab balblba bla balb balblab bla b.bla
              blabla blab balblba bla balb balblab bla bbla blabla blab balblba
              bla balb balblab bla b
            </p>
          </div>
        </div>

        <div className="portfolio-section">
          <h1>Product Survey Page</h1>

          <div className="image-container">
            <img src={survey} alt="view of survey page" />
            <img
              src={surveyMobile}
              className="mobile"
              alt="view of survey mobile page"
            />
          </div>

          <div className="portfolio__description">
            <p>
              bla blabla blab balblba bla balb balblab bla b.bla blabla blab
              balblba bla balb balblab bla b.bla blabla blab balblba bla balb
              balblab bla bbla blabla blab balblba bla balb balblab bla b.bla
              blabla blab balblba bla balb balblab bla bbla blabla blab balblba
              bla balb balblab bla b
            </p>
          </div>
        </div>

        <div className="portfolio-section">
          <h1>Pomodoro Timer</h1>

          <div className="image-container">
            <img src={pomodoro} alt="view of pomodoro page" />
            <img
              src={pomodoroMobile}
              className="mobile"
              alt="view of pomodoro mobile page"
            />
          </div>

          <div className="portfolio__description">
            <p>
              bla blabla blab balblba bla balb balblab bla b.bla blabla blab
              balblba bla balb balblab bla b.bla blabla blab balblba bla balb
              balblab bla bbla blabla blab balblba bla balb balblab bla b.bla
              blabla blab balblba bla balb balblab bla bbla blabla blab balblba
              bla balb balblab bla b
            </p>
          </div>
        </div>

        <div className="portfolio-section">
          <h1>Quote Fetcher</h1>

          <div className="image-container">
            <img src={quote} alt="view of quote page" />
            <img
              src={quoteMobile}
              className="mobile"
              alt="view of quote mobile page"
            />
          </div>

          <div className="portfolio__description">
            <p>
              bla blabla blab balblba bla balb balblab bla b.bla blabla blab
              balblba bla balb balblab bla b.bla blabla blab balblba bla balb
              balblab bla bbla blabla blab balblba bla balb balblab bla b.bla
              blabla blab balblba bla balb balblab bla bbla blabla blab balblba
              bla balb balblab bla b
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioSection;
