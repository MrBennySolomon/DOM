const btn = document.querySelector('button.btn');
const input = document.querySelector('input.input');
const user = document.querySelector('div.user');

const fetchGithubUser = async () => {
  const response = await fetch(`https://api.github.com/users/${input.value}`);
  const data = await response.json();

  user.innerHTML += `
  <label class="info">
    <img src="${data.avatar_url}" alt="${data.name}" width="100px" height="100px">
    <p>${data.name} have ${data.public_repos} public repos </p>
  </label>
  `;
};

document.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    fetchGithubUser();
  }
});
btn.addEventListener("click", fetchGithubUser);