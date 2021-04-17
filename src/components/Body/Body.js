import React, { useState, useEffect } from "react";
import Reqs from "../utils/TheMovieDB";
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
      .catch((error) => console.log(error, "Error , please fix!"));
  }, []);

  return (
    <div className="movie_container">
      {movies.map((movie, i) => {
        return (
          <h2 key={i}>
            <img
              src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
              alt="This is a movie"
              className="movie_here"
              key={i}
            />
            {movie.title}
            <p>{movie.release_date}</p>
          </h2>
        );
      })}
    </div>
  );
}

export default Body;
