import { API_key, base_url } from "./ConfigApi";
import { obterListaDeFilmes } from "./ConfigApi";

const getData = async (movieType, setUrl, setMovieData) => {
  let newUrl = "";

  if (movieType === "Todos") {
    newUrl = `${base_url}/discover/movie?sort_by=popularity.desc${API_key}`;
    try {
      const response = await fetch(newUrl);
      const data = await response.json();
      setMovieData(data.results);
    } catch (error) {
      console.error("Erro ao obter lista de filmes:", error);
    }
  } else if (movieType === "Animação" || movieType === "Ficção Científica" || movieType === "Drama" || movieType === "Comédia") {
    try {
      const movies = await obterListaDeFilmes();
      const filteredMovies = movies.filter((movie) => movie.genre === movieType);
      setMovieData(filteredMovies);
    } catch (error) {
      console.error("Erro ao obter lista de filmes:", error);
    }
  }

  setUrl(newUrl);
};

export default getData;
