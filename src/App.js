import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainEntry from "./components/MainEntry";
import FccTests from "./components/FccTests"
import Docs from "./components/Docs";
import Pomodoro from './pomodoro/Pomodoro';

const App = () => {
  
  const [modalIsVisible, setModalIsVisible] = useState(true) 
  const closeModal =()=> {
    setModalIsVisible(false)
  }

  return (
    <Router>
    
    <FccTests />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
<<<<<<< HEAD
              <MainEntry modalIsVisible={modalIsVisible} closeModal={closeModal}/>
=======
              <MainEntry/>
              <p>blabla</p>
>>>>>>> 00e3b86b4c3f094a07df8d9a51dd08a834bd5a88
            </>
          }
        />
          

        <Route path="*" element={<h1>NO No Page not found</h1>} />
        <Route path="/pomodoro" element={<Pomodoro />} />
        <Route target="_blank" rel="noreferrer" path="/docs" element={<Docs />} />

        <Route path="/notusedyet" element={<Docs />} />
      </Routes>
    </Router>
  );
};

export default App;
