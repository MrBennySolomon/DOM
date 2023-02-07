const btn = document.querySelector('button.btn');
const title = document.querySelector('input.title');
const year = document.querySelector('input.year');
const data = document.querySelector('div.data');

const fetchMovie = async () => {
  const response = await fetch(`http://www.omdbapi.com/?y=${year.value}&t=${title.value}&plot=full&i=tt3896198&apikey=91f7cf8b`);
  const info = await response.json();
  console.log(data);
  data.innerHTML = `movie title: ${info.Title} | year: ${info.Year} | rating: ${info.imdbRating} / 10 stars`;
};

document.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    fetchMovie();
  }
});
btn.addEventListener("click", fetchMovie);