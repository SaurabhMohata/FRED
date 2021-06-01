import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar() {
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
    alert(query);
  }

  return (
    <div class="container h-100">
      <div class="d-flex justify-content-center h-100">
        <div class="searchbar">
          <input
            onChange={handleChange}
            class="search_input"
            type="text"
            name="search"
            placeholder="Search for a user"
            value={query}
          />
          <button onClick={makeSearch} class="search_icon submit-with-icon">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
