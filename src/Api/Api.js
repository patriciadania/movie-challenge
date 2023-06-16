const apiKey = '3bf2040923cd458825e0054323a2ecbd';
const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

export async function fetchMovieDetails(id) { // solicitação à API do TMDb para obter os detalhes de um filme específico.
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US&page=1`);
    const data = await response.json();

    const { title, poster_path, overview, release_date } = data;
    const movie = {
      id,
      title,
      overview: overview,
      image: `${imageBaseUrl}${poster_path}`,
      releaseDate: release_date,
    };

    console.log(data);
    return movie;
  } catch (error) {
    console.error(error);
  }
}

export async function searchMovies(query) { //Pesquisar filmes:
  try {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1`);
    const data = await response.json();
    
    // Processar os resultados da pesquisa
    const movies = data.results.map(movie => ({
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      image: `${imageBaseUrl}${movie.poster_path}`,
      releaseDate: movie.release_date,
    }));
    
    console.log(data);
    return movies;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieCredits(movieId) { //Obter detalhes do elenco de um filme:
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`);
    const data = await response.json();
    
    // Processar detalhes do elenco
    const cast = data.cast.map(actor => ({
      id: actor.id,
      name: actor.name,
      character: actor.character,
      profileImage: `${imageBaseUrl}${actor.profile_path}`,
    }));
    
    console.log(data);
    return cast;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieImages(movieId) { //Obter imagens relacionadas a um filme:
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${apiKey}`);
    const data = await response.json();
    
    // Processar imagens relacionadas ao filme
    const images = data.backdrops.map(image => ({
      id: image.file_path,
      imageUrl: `${imageBaseUrl}${image.file_path}`,
    }));
    
    console.log(data);
    return images;
  } catch (error) {
    console.error(error);
  }
}
export async function getMovieReviews(movieId) { //Obter avaliações de um filme:
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}`);
    const data = await response.json();
    
    // Processar avaliações do filme
    const reviews = data.results.map(review => ({
      id: review.id,
      author: review.author,
      content: review.content,
    }));
    
    console.log(data);
    return reviews;
  } catch (error) {
    console.error(error);
  }
}

