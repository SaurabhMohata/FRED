import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar(props) {
  //this will reflect the change in the parents tag state
  const [query, setQuery] = useState("");

  function handleChange(event) {
    // always fetch this value before calling state function otherwise it'll throw an error
    // changingComplexState Video by Angela Yu
    const value = event.target.value;
    setQuery(value);
  }

  function makeSearch() {
    // make an api call to get users which satisfy this criteria
    // render only that users on screen
    // how to do this?
    // const getSearchedListing = await API('contentListing/','POST',obj,props.token);
    // props.setData(getSearchedListing)
    props.setTag(query)
  }

  return (
    <div className="container h-100">
      <div className="d-flex justify-content-center h-100">
        <div className="searchbar">
          <input
            onChange={handleChange}
            className="search_input"
            type="text"
            name="search"
            placeholder="Search for a user"
            value={query}
          />
          <button onClick={makeSearch} className="search_icon submit-with-icon">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
