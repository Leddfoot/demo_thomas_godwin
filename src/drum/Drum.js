import React, { useEffect, useState } from "react";

import Container from "./components/Container";
import sounds from "./components/sounds";


function Drum() {

  const [soundLetterBeingPlayed, setSoundLetterBeingPlayed] = useState('none')
  const [soundBeingPlayed, setSoundBeingPlayed] = useState('waiting')

  const playSound = (e, key) => {

  let result = sounds.find(function(sound) {
 
        
    if (sound.letter === soundLetterBeingPlayed) {
        return true
    }
    return false
})

if (result) {
  setSoundBeingPlayed(result.name)
} 

if (key) {
  const audioEl = document.getElementById(key)
  setSoundLetterBeingPlayed(key)
  audioEl.play()
} else {

let availableLetters = sounds.map(sound =>{ 
  return sound.letter
})

let capitalizedKeyPressed = e.key.toUpperCase()

if (availableLetters.includes(capitalizedKeyPressed)) {
    const keyPressed = e.key
    const keyPressedUppercase = keyPressed.toUpperCase()
    const audioEl = document.getElementById(keyPressedUppercase)
    setSoundLetterBeingPlayed(keyPressedUppercase)
    audioEl.play()
}

}
    
    
  };

  useEffect(() => {
    window.addEventListener('keydown', playSound);
    return () => {
      window.removeEventListener('keydown', playSound);
    };
  });
  return (
    <Container toSendForward= {playSound} soundLetter={soundLetterBeingPlayed} soundBeingPlayed={soundBeingPlayed} />
  )


}

export default Drum;
