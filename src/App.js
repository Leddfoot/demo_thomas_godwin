import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainEntry from "./components/MainEntry";
import Docs from "./components/Docs";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <MainEntry/>
            </>
          }
        />

        <Route path="/docs" element={<Docs />} />

        <Route path="/notusedyet" element={<Docs />} />
      </Routes>
    </Router>
  );
};

export default App;
