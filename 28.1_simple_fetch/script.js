


let btn = document.querySelector('.btn');
let jokeDiv = document.querySelector('.joke');

btn.addEventListener('click', () => {
  fetch('https://api.jokes.one/jod')
  .then((res) => res.json())
  .then((data) => {
    jokeDiv.innerText = `${data.contents.jokes[0].joke.title} ,  ${data.contents.jokes[0].joke.text}`;
})});