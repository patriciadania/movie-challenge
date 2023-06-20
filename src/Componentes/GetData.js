import { API_key, base_url } from "./ConfigApi";

const getData = (movieType, setUrl) => {
    let newUrl = "";

    if (movieType === "Popular") {
      newUrl = `${base_url}/discover/movie?sort_by=popularity.desc${API_key}`;
    } else if (movieType === "Ação") {
      newUrl = `${base_url}/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22${API_key}`;
    } else if (movieType === "Crianças") {
      newUrl = `${base_url}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc${API_key}`;
    } else if (movieType === "Drama") {
      newUrl = `${base_url}/discover/movie?with_genres=18&primary_release_year=2014${API_key}`;
    } else if (movieType === "Comédia") {
      newUrl = `${base_url}/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc${API_key}`;
    }

    setUrl(newUrl);
  };
  export default getData;