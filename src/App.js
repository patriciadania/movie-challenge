import React, { useState, useEffect } from 'react';
import './Componentes/style.css';
import Logo from "./Imagens/Logo.png";
import getData from "./Componentes/GetData";
import { API_key, base_url } from "./Componentes/ConfigApi";
import Card from "./Componentes/Card";
import Footer from "./Componentes/Footer";
import { searchMovie } from "./Componentes/SearchMovie";

const genres = ["Todos", "Animação", "Ficção Científica", "Drama", "Comédia"];

function App() {
  const [movieData, setMovieData] = useState([]);
  const [url, setUrl] = useState(`${base_url}/discover/movie?sort_by=popularity.desc${API_key}`);
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [remainingMovies, setRemainingMovies] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovieData(data.results);
      })
      .catch((error) => {
        console.error('Erro ao obter lista de filmes:', error);
      });
  }, [url]);

  useEffect(() => {
    if (movieData.length > 0) {
      setRemainingMovies([...movieData]);
    }
  }, [movieData]);

  const getRandomMovie = () => {
    if (remainingMovies.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * remainingMovies.length);
    const randomMovie = remainingMovies.splice(randomIndex, 1)[0];
    return randomMovie;
  };

  const handleGetData = (movieType) => {
    getData(movieType, setUrl, setMovieData);
    setIsSearching(false);
    setSearch("");
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      searchMovie(e, setUrl, setSearch, setMovieData, setIsSearching);
    }
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <nav>
          <ul>
            {genres.map((genre, index) => (
              <li key={index}>
                <a
                  href="#Home"
                  name={genre}
                  onClick={(e) => {
                    e.preventDefault();
                    handleGetData(e.target.name);
                  }}
                >
                  {genre}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <form>
          <div className="search-btn">
            <input
              type="text"
              placeholder="Procurar por nome"
              className="inputText"
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleKeyDown}
              value={search}
            />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>
      </div>
      <div className="container">
        {isSearching ? (
          movieData.length === 0 ? (
            <p className="notfound">Nenhum filme encontrado.</p>
          ) : (
            movieData.map((movie, index) => <Card movie={movie} key={index} />)
          )
        ) : (
          Array.from({ length: 10 }, (_, index) => {
            const randomMovie = getRandomMovie();
            return randomMovie ? <Card movie={randomMovie} key={index} /> : null;
          })
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
