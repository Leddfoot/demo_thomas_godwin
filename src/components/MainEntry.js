import React from "react";
import StartupModal from "./UI/Button/StartupModal/StartupModal";
import Button from "./UI/Button/Button";

function MainEntry({ modalIsVisible, closeModal }) {
  return (
    <>
      {modalIsVisible ? <StartupModal closeModal={closeModal} /> : null}
      <div>
        <h1>MainEntry page</h1>
        <h2>TODOS</h2>
        <h3>Style Drum & Markdown, docs -- cleanup(junk in middle</h3>

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
          <a href="/pomodoro">pomodoro</a>
        </Button>
        <Button>
          <a href="/calculator">calculator</a>
        </Button>
        <Button>
          <a href="/drum">Drum Machine</a>
        </Button>
        <Button>
          <a href="/markdown">Markdown Previewer</a>
        </Button>
        <Button>
          <a href="/landing-page">Product Landing Page</a>
        </Button>
      </div>
    </>
  );
}

export default MainEntry;
