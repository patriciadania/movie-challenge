import { API_key, base_url } from "./ConfigApi";

const getData = (movieType, setUrl, setMovieData) => {
  let newUrl = "";

  if (movieType === "Todos") {
    newUrl = `${base_url}/discover/movie?sort_by=popularity.desc${API_key}`;
  } else if (movieType === "Ação") {
    newUrl = `${base_url}/discover/movie?with_genres=28${API_key}`;
  } else if (movieType === "Crianças") {
    newUrl = `${base_url}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc${API_key}`;
  } else if (movieType === "Drama") {
    newUrl = `${base_url}/discover/movie?with_genres=18${API_key}`;
  } else if (movieType === "Comédia") {
    newUrl = `${base_url}/discover/movie?with_genres=35${API_key}`;
  }
  fetch(newUrl)
    .then((res) => res.json())
    .then((data) => {
      setMovieData(data.results);
    });
  setUrl(newUrl);
};


  export default getData;