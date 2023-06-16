import React from 'react';
import MovieItem from '../ItemDeFilme/MovieItem';
import './MovieList.css';

function MovieList({ movies }) {
  return (
    <div>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
