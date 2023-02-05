const board = [
  [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  [6, 6, 6, 6, 6, 6, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  [6, 6, 6, 6, 7, 7, 7, 7, 6, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  [6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  [6, 6, 6, 6, 6, 6, 6, 7, 7, 6, 6, 6, 6, 6, 6, 5, 5, 5, 6, 6],
  [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 6, 6],
  [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 6, 6],
  [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 6, 6, 6],
  [6, 6, 6, 6, 3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 6, 6, 6],
  [6, 6, 6, 3, 3, 3, 6, 6, 6, 6, 6, 6, 6, 4, 4, 6, 5, 6, 6, 4],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ]

const dirt = document.createElement('div');
dirt.setAttribute('class', 'dirt');
const grass = document.createElement('div');
grass.setAttribute('class', 'grass');
const stone = document.createElement('div');
stone.setAttribute('class', 'stone');
const wood = document.createElement('div');
wood.setAttribute('class', 'wood');
const leaves = document.createElement('div');
leaves.setAttribute('class', 'leaves');
const sky = document.createElement('div');
sky.setAttribute('class', 'sky');
const cloud = document.createElement('div');
cloud.setAttribute('class', 'cloud');
  

const buttonStart = document.querySelector('.button-start');
const mainScreen = document.querySelector('.main-screen');
const logoButtonStart = document.querySelector('.logo-button-start');

buttonStart.addEventListener('click', function() {
  logoButtonStart.setAttribute('class', 'none');
  mainScreen.setAttribute('class', 'real-game');
  buildBoard();

});

const buildBoard = () => {
  for (const row of board) {
    const div = document.createElement('div');
    for (const col of row) {
      console.log(col);
      switch (col) {
        case 1:
          div.appendChild(dirt);
          break;
        case 2:
          div.appendChild(grass);
          break;
        case 3:
          div.appendChild(leaves);
          break;
        case 4:
          div.appendChild(stone);
          break;
        case 5:
          div.appendChild(wood);
          break;
        case 6:
          div.appendChild(sky);
          break;
        case 7:
          div.appendChild(cloud);
          break;
        default:
          break;
      }
    }
    mainScreen.appendChild(div);
  }
  // document.body.appendChild(mainScreen);
}


buildBoard();




