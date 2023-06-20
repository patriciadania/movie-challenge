/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Componentes/style.css';
import { useState, useEffect } from "react";
import Card from "./Componentes/Card";
import Logo from "./Imagens/Logo.png";
import getData from "./Componentes/GetData";
import { searchMovie } from "./Componentes/SearchMovie";
import { API_key, base_url } from "./Componentes/ConfigApi";

const arr = ["Popular", "Ação", "Crianças", "Drama", "Comédia"];


function App() {
  
  const [movieData, setMovieData] = useState([]);
  const [url, setUrl] = useState(`${base_url}/discover/movie?sort_by=popularity.desc${API_key}`);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovieData(data.results);
      });
  }, [url]);

  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <nav>
          <ul>
            {arr.map((value, pos) => (
              <li key={pos}>
                <a
                  href="#Home"
                  name={value}
                  onClick={(e) => {
                    getData(e.target.name,setUrl);
                  }}
                >
                  {value}
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
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              value={search}
              onKeyPress={(e) => searchMovie(e, setUrl, setSearch, search)}
              />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>
      </div>
      <div className="container">
        {movieData.length === 0 ? (
          <p className="notfound">Não Encontrado</p>
        ) : (
          movieData.map((res, pos) => (
            <Card info={res} key={pos} />
          ))
        )}
      </div>
    </>
  );
};

export default App;

