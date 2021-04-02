const API = "0e94f803d16ffacb3a17c146abab30a20";
const URL = "https://api.themoviedb.org/3"

const reqs = {
    fetchTrending: `${URL}/trending/movie/week?api_key=${API}`
}

export default reqs;