const instance = require("axios").create({
  baseURL: "https://api.themoviedb.org",
});

export const getResponse = instance.get(
  "/3/trending/movie/week?api_key=0e94f803d16ffacb3a17c146abab30a2"
);

/* The API key
   https://api.themoviedb.org/3/trending/movie/week?api_key=0e94f803d16ffacb3a17c146abab30a2 */
