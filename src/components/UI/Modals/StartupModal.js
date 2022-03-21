import React from "react";
import "./StartupModal.css";
import Button from "../Button/Button";

function StartupModal({ closeModal }) {
  return (
    <>
      <div className="backdrop"></div>
      <div className="modal">
        <h1 className="modal__title">Just so you know...</h1>
        <p>Please excuse the <em>SLOW </em>&nbsp;load time. This is a free tier on Heroku!</p>
        <p>The portfolio section contains many demo programs that were written as part of the FreeCodeCamp certification process, with the exception of the first demo Oh SH!T! is my Vinmonopolet open. All of these items include a group of tests that must be satified to earn the certification. The tests sometimes affect the layout/structure/design/javascript functionality of the pages. These were all written towards passing their tests.</p>
        <p>I included these tests to show the user stories that I was developing towards, and and to show that they are all passing. Just select the hamburger menu at the top left and select the proper test.</p>
        <p>However, I found the presence of the test suite quite irritating, so at any time just press the Remove Test Suite button at the top right, and it will hide the test suite and return the page to it's original look and feel. (Refreshing the page will bring them back if needed).</p>
        <div className="modal__actions">
          <Button onClick={closeModal}>Got it!</Button>
        </div>
      </div>
    </>
  );
}

export default StartupModal;
