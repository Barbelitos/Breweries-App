import { useRef } from "react";

import classes from "./SearchBar.module.css";

const SearchBar = (props) => {
  const inputEl = useRef("");

  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  };

  return (
    <input
      ref={inputEl}
      className={classes.search}
      type="text"
      placeholder="Search breweries by name, type, street, city or state..."
      value={props.searchTerm}
      onChange={getSearchTerm}
    ></input>
  );
};

export default SearchBar;
