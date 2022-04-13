import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import BreweryDetails from "./views/BreweryDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<BreweryDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
