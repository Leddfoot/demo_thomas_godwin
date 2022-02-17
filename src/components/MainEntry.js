import React from "react";
// import StartupModal from "./UI/Modals/StartupModal";
import Button from "./UI/Button/Button";

import './MainEntry.css'

function MainEntry({ modalIsVisible }) {


  ///Note- using noreferrer bc linter says target blank wo is a security issue & I want all pages to open a new page
  return (
    <>
      <div className="main-entry__wrapper">
        <h1>MainEntry page</h1>
        <h2>TODOS</h2>
        <h3>Style Drum & Markdown, calc -- change footer, add footer to all except docs</h3>
        <h3>YOU ARE WORKING ON SURVEY LARGE STYLING</h3>

        <Button>
          <a
            target="_blank"
            rel='noreferrer'
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
          <a href="/landing-page" >Product Landing Page</a>
        </Button>
        <Button>
          <a href="/survey" >Product Survey</a>
        </Button>
        <Button>
          <a href="/quote" >Quote Machine</a>
        </Button>

      </div>
    </>
  );
}

export default MainEntry;
