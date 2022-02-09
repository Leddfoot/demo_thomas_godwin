import BreakLengthDisplay from "./components/BreakLengthDisplay";
import SessionLengthDisplay from "./components/SessionLengthDisplay.js";
import TimerControls from "./components/TimerControls";
import TimerDisplay from "./components/TimerDisplay";
import Audio from "./components/Audio";

import { TimerProvider } from "./context/TimerContext";

import './Pomodoro.css'


// <style>
// @import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light+Two&display=swap');
// </style>

// font-family: 'Shadows Into Light Two', cursive;


function Pomodoro() {

  return (
    <TimerProvider>
    <div className="pomodoro-container">
    <BreakLengthDisplay />
    <SessionLengthDisplay />
    <TimerDisplay />
    <TimerControls />
    <Audio />
    </div>
    </TimerProvider>
  );
}

export default Pomodoro;
