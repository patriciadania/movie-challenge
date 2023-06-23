import React from "react";

const Card = ({ movie }) => {
  const img_path_tmdb = "https://image.tmdb.org/t/p/w500";
  const img_path_api = "https://raw.githubusercontent.com/ThainaraTabile/api-filmes/main/resources/images/";

  const { title, description, image, genre, rating, poster_path } = movie;

  // Verifica se o filme pertence à primeira ou à segunda API
  const isTmdbMovie = poster_path !== undefined;

  return (
    <div className="movie">
      <img src={isTmdbMovie ? img_path_tmdb + poster_path : img_path_api + image} className="poster" alt="imagem" />
      <div className="movie-details">
        <div className="box">
          <h4 className="title">{isTmdbMovie ? title : movie.title}</h4>
          <p className="rating">{isTmdbMovie ? movie.vote_average.toFixed(1) : rating}</p>
        </div>
        <div className="overview">
          <p>
            <strong>Gênero:</strong> {isTmdbMovie ? movie.genre : genre}
          </p>
          <h1>Visão geral</h1>
          {isTmdbMovie ? movie.overview : description}
        </div>
      </div>
    </div>
  );
};

export default Card;
