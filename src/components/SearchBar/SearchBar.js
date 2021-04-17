/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SearchBar.css";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [moviesHere, setMoviesHere] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=0e94f803d16ffacb3a17c146abab30a2"
      )
      .then((res) => {
        setMoviesHere(res.data.results);
        setLoading();
      });
  }, []);

  const results = !searchTerm
    ? moviesHere
    : moviesHere.filter((movie) =>
        movie.title
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLocaleLowerCase())
      );

  if (loading) {
    return <p>Please be patient, it's loading...</p>;
  }

  return (
    <div className="search-form">
      <input
        className="input-style"
        type="text"
        placeholder="Search your movie here"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {results.map((item, i) => (
          <p key={i}>{item.title}</p>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
