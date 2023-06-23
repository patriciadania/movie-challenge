export const API_key = "&api_key=3bf2040923cd458825e0054323a2ecbd";
export const base_url = "https://api.themoviedb.org/3";

const urlApi = 'https://api-filmes-rose.vercel.app';

export const obterListaDeFilmes = async () => {
    try {
      const response = await fetch(urlApi);
      const data = await response.json();
  
      if (data && data.movies && Array.isArray(data.movies)) {
        return data.movies.map((movie) => movie.image);
      } else {
        console.error('Formato de dados inválido');
        return [];
      }
    } catch (error) {
      console.error('Erro ao obter lista de filmes:', error);
      return [];
    }
  };
  