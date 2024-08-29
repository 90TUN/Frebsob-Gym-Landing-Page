import "./style.css";
import Home from "./components/Home";
import Policy from "./components/Policy";
import Terms from "./components/Terms";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page set as default for the root path */}
        <Route path="/" element={<Home />} />

        {/* Other routes */}
        <Route path="/policy" element={<Policy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Router>
  );
}

export default App;
