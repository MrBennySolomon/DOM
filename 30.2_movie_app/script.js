const btn   = document.querySelector('button.btn');
const title = document.querySelector('input.title');
const year  = document.querySelector('input.year');
const data  = document.querySelector('div.data');

// 1. Movie poster 
// 2. Movie title
// 3. Genre
// 4. Year
// 5. Plot
// 6. Director 
// 7. Actors

const fetchMovie = async () => {
  const response = await fetch(`http://www.omdbapi.com/?y=${year.value}&t=${title.value}&plot=full&i=tt3896198&apikey=91f7cf8b`);
  const info = await response.json();
  console.log(data);
  data.innerHTML = `<img src="${info.Poster}"><h3movie title</h3><h5>${info.Title}</h5><h3>year</h3><h5>${info.Year}</h5><h3>Genre</h3><h5>${info.Genre}</h5><h3>plot</h3><h5>${info.Plot}</h5><h3>director</h3><h5>${info.Director}</h5><h3>actors</h3><h5>${info.Actors}</h5><h3>rating</h3><h5>${info.imdbRating} / 10 stars</h5>`;
};

document.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    fetchMovie();
  }
});
btn.addEventListener("click", fetchMovie);