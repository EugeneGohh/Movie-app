import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const resetInput = () => {
    setSearchTerm("");
  };

  const callSearch = (e) => {
    e.preventDefault();
    props.search(searchTerm);
    resetInput();
  };

  return (
    <form className="search-form">
      <input
        className="input-style"
        type="text"
        placeholder="Search your movie here"
        value={searchTerm}
        onChange={handleChange}
      />
      <input onClick={callSearch} type="submit" value="SEARCH" />
    </form>
  );
}

export default SearchBar;
