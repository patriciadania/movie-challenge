import React, { useEffect, useState } from 'react';
import './MovieDetails.css';
import { fetchMovieDetails } from '../../Api/Api';

function MovieDetails({ movieId }) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await fetchMovieDetails(movieId);
      setMovie(data);
    };

    fetchMovie();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={movie.image} alt={movie.title} />
      <p>{movie.overview}</p>
      <p>{movie.releaseDate}</p>
    </div>
  );
}

export default MovieDetails;
