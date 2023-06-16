import React from 'react';
import './MovieItem.css';

function MovieItem({ movie }) {
  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={movie.image} alt={movie.title} />
      <p>{movie.releaseDate}</p>
    </div>
  );
}

export default MovieItem;
