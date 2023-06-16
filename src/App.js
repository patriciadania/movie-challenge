import React, { useState, useEffect } from 'react';
import { searchMovies, fetchMovieDetails, getMovieCredits, getMovieImages } from './Api/Api';
import SearchBar from './Componentes/BarraDePesquisa/SearchBar';
import MovieList from './Componentes/ListaDeFilmes/MovieList';
import MovieDetails from './Componentes/DetalhesDoFilme/MovieDetails';
import CastList from './Componentes/ListaDeElenco/CastList';
import ImageGallery from './Componentes/GaleriaDeImagem/ImageGallery';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Função para buscar os filmes
    const fetchMoviesData = async (query) => {
      const data = await searchMovies(query);
      setMovies(data);
    };

    // Chamar a função de busca inicialmente
    fetchMoviesData('');

    // Limpar o selectedMovie, cast e images quando a lista de filmes for atualizada
    setSelectedMovie(null);
    setCast([]);
    setImages([]);
  }, []);

  const handleSearch = async (query) => {
    const data = await searchMovies(query);
    setMovies(data);
    setSelectedMovie(null);
    setCast([]);
    setImages([]);
  };

  const handleMovieClick = async (movieId) => {
    const movieData = await fetchMovieDetails(movieId);
    const castData = await getMovieCredits(movieId);
    const imageData = await getMovieImages(movieId);

    setSelectedMovie(movieData);
    setCast(castData);
    setImages(imageData);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />

      {selectedMovie ? (
        <div>
          <MovieDetails movie={selectedMovie} />
          <h3>Cast</h3>
          <CastList cast={cast} />
          <h3>Images</h3>
          <ImageGallery images={images} />
        </div>
      ) : (
        <MovieList movies={movies} onItemClick={handleMovieClick} />
      )}
    </div>
  );
}

export default App;