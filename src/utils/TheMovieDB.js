const API = "0e94f803d16ffacb3a17c146abab30a2";
const URL = "https://api.themoviedb.org/3";

const Reqs = {
  fetchTrending: `${URL}/trending/movie/week?api_key=${API}`,
};

export default Reqs;

/* The API key
   https://api.themoviedb.org/3/trending/movie/week?api_key=0e94f803d16ffacb3a17c146abab30a2 */