// import { useState, useCallback, useEffect } from "react";

// import BreweriesContainer from "./components/BreweriesContainer";
// import Header from "./components/Header";
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
  // const [breweries, setBreweries] = useState([]);
  // const [error, setError] = useState(null);
  // const fetchBreweriesHandler = useCallback(async () => {
  //   setError(null);
  //   try {
  //     const response = await fetch("https://api.openbrewerydb.org/breweries");
  //     if (!response.ok) {
  //       throw new Error("Something went wrong!");
  //     }
  //     const data = await response.json();
  //     const loadedBreweries = [];
  //     for (const key in data) {
  //       loadedBreweries.push({
  //         id: key,
  //         name: data[key].name,
  //         type: data[key].brewery_type,
  //         city: data[key].city,
  //       });
  //     }
  //     setBreweries(loadedBreweries);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // }, []);
  // useEffect(() => {
  //   fetchBreweriesHandler();
  // }, [fetchBreweriesHandler]);
  // return (
  //   <>
  //     <Header />
  //     <BreweriesContainer breweries={breweries} />
  //   </>
  // );
};

export default App;
