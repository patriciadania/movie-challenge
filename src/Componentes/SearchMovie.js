// searchMovie.js
import { base_url } from "./ConfigApi";

export const searchMovie = async (evt, setUrl, setSearch, setMovieData, setIsSearching) => {
  if (evt.key === "Enter") {
    const searchValue = evt.target.value;
    setIsSearching(true);
    const newUrl = `${base_url}/search/movie?api_key=db95773a7fb212ba790d71f6adac0e7e&query=${searchValue}`;
    
    try {
      const response = await fetch(newUrl);
      const data = await response.json();
      setMovieData(data.results);
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    }

    setIsSearching(false);
    setUrl(newUrl);
    setSearch("");
  }
};
