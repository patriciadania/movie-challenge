const apiKey = '2c884501';
const movieTitle = 'Titanic';

fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${movieTitle}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });