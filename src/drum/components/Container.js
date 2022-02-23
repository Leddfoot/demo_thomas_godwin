import React from "react";
import sounds from "./sounds";
import Footer from "../../components/UI/Footer/Footer";

import DrumPad from "./DrumPad";
import Display from "./Display";

const Container = (props) => {
  let result = sounds.find(function (sound) {
    if (sound.letter === props.soundLetter) {
      return true;
    }
    return false;
  });

  let soundPlayed = "waiting for input";

  if (result) {
    soundPlayed = result.name;
  }

  return (
    <>
      <div id="drum-machine" className="drum-wrapper">
      <h1>Standard Drum Machine</h1>
      <h2>Click on any sound button, or alternatively press the keyboard button that corresponds with the letter on each button</h2>
        <Display soundPlayed={soundPlayed} />
        <div className="drumpad-container">
        {sounds.map((sound, index) => (
            <DrumPad
              playSound={props.toSendForward}
              key={index}
              name={sound.name}
              link={sound.link}
              letter={sound.letter}
            ></DrumPad>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Container;
