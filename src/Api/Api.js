export const apiKey = '3bf2040923cd458825e0054323a2ecbd';


async function fetchMovieDetails(id, image_path) {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=us-US&page=1`);
    const data = await response.json();

    const { title, poster_path, overview, release_date } = data;
    const movie = {
      id,
      title,
      overview: overview,
      image: `${image_path}${poster_path}`,
      releaseDate: release_date,
    };

    console.log(data);
    return movie;
  } catch (error) {
    console.error(error);
  }
}

export default fetchMovieDetails;
