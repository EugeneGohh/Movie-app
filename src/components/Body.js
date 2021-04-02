import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Body.css";

const API = "0e94f803d16ffacb3a17c146abab30a2";
const URL = "https://api.themoviedb.org/3";

const reqs = {
  fetchTrending: `${URL}/trending/movie/week?api_key=${API}`,
};

function Body() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(reqs.fetchTrending)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="body">
      {movies.map((movie, i) => {
        return <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt="This is a movie" key={i}/>;
      })}
    </div>
  );
}

export default Body;
