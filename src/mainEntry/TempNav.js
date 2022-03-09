import React from 'react'
import Button from '../components/UI/Button/Button'

function TempNav() {
  return (
    <div className="nav-wrapper">
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
    <Button>
      <a href="/survey">Product Survey</a>
    </Button>
    <Button>
      <a href="/quote">Quote Machine</a>
    </Button>
  </div>
  )
}

export default TempNav