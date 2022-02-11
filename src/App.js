import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainEntry from "./components/MainEntry";
import FccTests from "./components/FccTests";
import TestButton from "./components/UI/Button/TestButton";
import Docs from "./components/Docs";
import Pomodoro from "./pomodoro/Pomodoro";
import Calculator from "./calculator/Calculator";
import Drum from './drum/Drum'

const App = () => {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const closeModal = () => {
    setModalIsVisible(false);
  };

  return (
    <>
    <FccTests />
    <Router>
    <TestButton />
    <Routes>
      <Route
        exact
        path="/"
        element={
          <>
            <MainEntry
              modalIsVisible={modalIsVisible}
              closeModal={closeModal}
            />
          </>
        }
      />

      <Route path="*" element={<h1>NO No Page not found</h1>} />
      <Route path="/pomodoro" element={<Pomodoro />} />
      <Route
        target="_blank"
        rel="noreferrer"
        path="/docs"
        element={<Docs />}
      />

      <Route path="/calculator" element={<Calculator />} />
      <Route path="/drum" element={<Drum />} />
      <Route path="/notusedyet" element={<Docs />} />
      <Route path="/notusedyet" element={<Docs />} />
      <Route path="/notusedyet" element={<Docs />} />
    </Routes>
  </Router>
    </>
  );
};

export default App;
