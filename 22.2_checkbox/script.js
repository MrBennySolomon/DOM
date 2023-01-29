const checkbox = document.getElementById('switch');
const photo = document.querySelector('.photo');

checkbox.addEventListener('input', function(e) {
  if(e.target.value === 'on') {
    photo.classList.toggle('show');
  }
});