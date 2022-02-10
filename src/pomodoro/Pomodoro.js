import BreakLengthDisplay from "./components/BreakLengthDisplay";
import SessionLengthDisplay from "./components/SessionLengthDisplay.js";
import TimerControls from "./components/TimerControls";
import TimerDisplay from "./components/TimerDisplay";
import MainHeader from "./components/MainHeader";
import Audio from "./components/Audio";

import { TimerProvider } from "./context/TimerContext";

import "./Pomodoro.css";

function Pomodoro() {
  return (
    <TimerProvider>
      <div className="pomodoro-container">
        <div className="main-element-container">
        <MainHeader />
          <div className="timer-container">
            <TimerDisplay />
          </div>
          <BreakLengthDisplay />
          <SessionLengthDisplay />
          <TimerControls />
          <Audio />
        </div>
      </div>
    </TimerProvider>
  );
}

export default Pomodoro;
