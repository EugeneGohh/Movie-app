import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const resetInputField = () => {
    setSearchTerm("")
  }

  const callSearchFunc = (e) => {
    e.preventDefault();
    props.search(searchTerm);
    resetInputField();
  }

  return (
    <div>
      <input
        className="input-style"
        type="text"
        placeholder="Search your movie here"
        value={searchTerm}
        onChange={handleChange}
      />
      <input onClick={callSearchFunc} type="submit" value="SEARCH" />
    </div>
  );
}

export default SearchBar;
