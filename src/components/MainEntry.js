import React from "react";
import StartupModal from "./UI/Button/StartupModal/StartupModal";
import Button from "./UI/Button/Button";

function MainEntry({ modalIsVisible, closeModal }) {
  return (
    <>
      {modalIsVisible ? <StartupModal closeModal={closeModal} /> : null}
      <div>
        <h1>MainEntry page</h1>

          <Button>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://fcc-docs.herokuapp.com/"
            >
              The Docs Page
            </a>
          </Button>
          <Button>
            <a href="/pomodoro"
            >
            pomodoro
            </a>
          </Button>
      </div>
    </>
  );
}

export default MainEntry;
