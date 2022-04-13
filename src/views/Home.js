import { useState, useEffect, useCallback } from "react";

import Header from "../components/Header";
import BreweriesContainer from "../components/BreweriesContainer";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [breweries, setBreweries] = useState([]);
  const [error, setError] = useState(null);

  const fetchBreweriesHandler = useCallback(async () => {
    setError(null);
    try {
      const response = await fetch("https://api.openbrewerydb.org/breweries");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedBreweries = [];

      for (const key in data) {
        loadedBreweries.push({
          id: key,
          name: data[key].name,
          type: data[key].brewery_type,
          street: data[key].street,
          city: data[key].city,
          state: data[key].state,
        });
      }

      setBreweries(loadedBreweries);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    fetchBreweriesHandler();
  }, [fetchBreweriesHandler]);

  return (
    <>
      <Header />
      <SearchBar />
      <BreweriesContainer breweries={breweries} />
    </>
  );
};

export default Home;
