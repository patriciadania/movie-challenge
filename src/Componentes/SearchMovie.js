import { base_url } from "./ConfigApi";

export const searchMovie = (evt, setUrl, setSearch, search) => {
    if (evt.key === "Enter") {
      const newUrl = `${base_url}/search/movie?api_key=db95773a7fb212ba790d71f6adac0e7e&query=${search}`;
      setUrl(newUrl);
      setSearch("");
    }
  };

