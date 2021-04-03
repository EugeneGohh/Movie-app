import React, { useState, useEffect } from "react";
import Reqs from "./Request";
import axios from "axios";
import "./Body.css";

function Body() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(Reqs.fetchTrending)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="movie_container">
    {movies.map((movie, i) => {
      return (
      <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt="This is a movie" key={i} className="movie_here"/>
    )})}
    </div>
  );
}

export default Body;
