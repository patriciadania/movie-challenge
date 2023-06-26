import React, { useState, useEffect } from "react";
import Card from "./Card";
import Logo from '../Imagens/Logo.png'
import Footer from './Footer'

const Main = () => {
  const [movieData, setData] = useState([]);
  const [url, setUrl] = useState(
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3bf2040923cd458825e0054323a2ecbd"
  );
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [url]);

  const searchMovie = (evt) => {
    if (evt.key === "Enter") {
      evt.preventDefault();
      const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=3bf2040923cd458825e0054323a2ecbd&query=${search}`;
      setSearchResults([]);
      setLoading(true);
      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
          setSearchResults(data.results);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
      setSearch("");
    }
  };

  const getData = (movieType) => {
    let apiUrl = "";
  if (movieType === "Popular") {
    apiUrl =
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3bf2040923cd458825e0054323a2ecbd";
    setUrl(apiUrl);
    setSearchResults([]);
    setLoading(true);
   } else if (movieType === "Ação") {
      apiUrl =
        "https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=3bf2040923cd458825e0054323a2ecbd";
    } else if (movieType === "Crianças") {
      apiUrl =
        "https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=3bf2040923cd458825e0054323a2ecbd";
    } else if (movieType === "Drama") {
      apiUrl =
        "https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2014&api_key=3bf2040923cd458825e0054323a2ecbd";
    } else if (movieType === "Comédia") {
      apiUrl =
        "https://api.themoviedb.org/3/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc&api_key=3bf2040923cd458825e0054323a2ecbd";
    }
    setUrl(apiUrl);
    setSearchResults([]);
    setLoading(true);
  };
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <nav>
          <ul>
            {["Popular", "Ação", "Crianças", "Drama", "Comédia"].map(
              (value, pos) => (
                <li key={pos}>
                  <a
                    href="/"
                    name={value}
                    onClick={(e) => {
                      e.preventDefault();
                      getData(e.target.name);
                    }}
                  >
                    {value}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>
        <form>
          <div className="search-btn">
            <input
              type="text"
              placeholder="Procurar por nome"
              className="inputText"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchMovie}
            />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>
      </div>
      <div className="container">
        {loading ? (
          <p className="loading">Aguarde...</p>
        ) : searchResults.length > 0 ? (
          searchResults.map((res, pos) => <Card info={res} key={pos} />)
        ) : movieData.length === 0 ? (
          <p className="notfound">Não Encontrado</p>
        ) : (
          <>
            {url.includes("sort_by=popularity.desc") ? (
              shuffle(movieData).slice(0, 10).map((res, pos) => (
                <Card info={res} key={pos} />
              ))
            ) : (
              movieData.map((res, pos) => <Card info={res} key={pos} />)
            )}
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Main;
