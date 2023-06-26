import React from "react";

const Card = ({ info }) => {
  let img_path = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="movie">
      <img src={img_path + info.poster_path} alt="imagem" className="poster" />
      <div className="movie-details">
        <div className="box">
          <h4 className="title">{info.title}</h4>
          <p className="rating">{info.vote_average.toFixed(1)}</p>
        </div>
        <div className="overview">
          <p className="release-date">Data de Lançamento: {info.release_date}</p>
          <h1>Visão Geral</h1>
          <p>{info.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
