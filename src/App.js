import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainEntry from "./components/MainEntry";
import FccTests from "./components/FccTests";
import RemoveTestsButton from "./components/UI/Button/RemoveTestsButton";
import Pomodoro from "./pomodoro/Pomodoro";
import Calculator from "./calculator/Calculator";
import Drum from "./drum/Drum";
import Markdown from "./markdown-preview/Markdown";
import LandingPage from "./product-landing-page/LandingPage";
import Survey from "./survey/Survey";
import QuoteMachine from "./quote-machine/QuoteMachine";
import { TestButtonProvider } from "./components/context/TestButtonContext";

const App = () => {
  const [modalisvisible] = useState(true);
  // const closeModal = () => {
  //   setModalIsVisible(false);
  // };

  return (
    <>
      <FccTests />
      <Router>
        <TestButtonProvider>
          <RemoveTestsButton />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <MainEntry modalisvisible={modalisvisible} />
              </>
            }
          />

          <Route path="*" element={<h1>NO No Page not found</h1>} />
          <Route path="/pomodoro" element={<Pomodoro />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/drum" element={<Drum />} />
          <Route path="/markdown" element={<Markdown />} />
          <Route path="/landing-page" element={<LandingPage />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/quote" element={<QuoteMachine />} />
          <Route path="/notusedyet" element={<QuoteMachine />} />
          <Route path="/notusedyet" element={<QuoteMachine />} />
        </Routes>
        </TestButtonProvider>
      </Router>
    </>
  );
};

export default App;
