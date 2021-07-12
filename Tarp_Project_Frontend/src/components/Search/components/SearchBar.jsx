import React, { useState } from "react";
import "../styles.css";

function SearchBar(props) {
  const [query, setQuery] = useState("");

  function handleEvent(event) {
    const value = event.target.value;
    setQuery(value);
  }

  function search() {
    // make an api call and fetch the search results
    // render them

    // alert(query);
    props.setTag(query)

  }

  return (
    <div className="container h-100">
      <div className="d-flex justify-content-center h-100">
        <div className="searchbar">
          <input
            className="search_input"
            type="text"
            name="search_input"
            placeholder="Search for anything"
            value={query}
            onChange={handleEvent}
          />
          <button onClick={search} className="search_icon submit-with-icon">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
