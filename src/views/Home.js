import { useState, useEffect, useCallback } from "react";

import Header from "../components/Layout/Header";
import BreweriesContainer from "../components/Breweries/BreweriesContainer";
import SearchBar from "../components/UI/SearchBar";

const Home = () => {
  const [breweries, setBreweries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState("");

  const fetchBreweriesHandler = useCallback(async () => {
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
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchBreweriesHandler();
  }, [fetchBreweriesHandler]);

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const updatedBreweries = breweries.filter((brewery) => {
        return Object.values(brewery)
          .join("")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(updatedBreweries);
    } else {
      setSearchResults(breweries);
    }
  };

  return (
    <>
      <Header />
      <SearchBar searchTerm={searchTerm} searchKeyword={searchHandler} />
      <BreweriesContainer
        breweries={searchTerm.length < 1 ? breweries : searchResults}
      />
    </>
  );
};

export default Home;
