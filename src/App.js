import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/test" element={<h2>Testing more routes</h2>} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
