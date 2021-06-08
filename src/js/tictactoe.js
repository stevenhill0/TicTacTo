import { addSounds, removeClasses, clearData } from './helper.js';
import { data } from './data.js';

const startGame = () => {
  // selectSquare();
  setImage();
};

//Click to add image
// const selectSquare = () => {
//   const squares = document.getElementsByClassName('inner-square');

//   for (let square of squares) {
//     square.addEventListener('click', (event) => {
//       addImageToSquare(square, event);
//     });
//   }
// };

let imageTurn = true;
const switchImages = () => {
  const turn = imageTurn;
  imageTurn = !imageTurn;

  return turn;
};
//get Image for Drop Image function
const getImage = () => {
  const images = [...document.querySelectorAll('.draggable')];
  const turn = switchImages();

  images.forEach((image) => {
    const images = image;
    return images;
  });

  const image = turn ? images[0] : images[1];
  image.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text', e.target.id);
    e.dataTransfer.effectAllowed = 'copy';
  });
};

//Drag and Drop to add image
const setImage = () => {
  const squares = [...document.getElementsByClassName('inner-square')];

  squares.forEach((square) => {
    square.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.target.classList.add('drag-over');
      e.dataTransfer.dropEffect = 'copy';
    });

    square.addEventListener('drop', (e) => {
      e.target.classList.remove('drag-over');
      // clone the draggable element
      const id = e.dataTransfer.getData('text');
      const nodeCopy = document.getElementById(id).cloneNode(true);

      // add it to the drop target
      nodeCopy.id = 'newId';
      e.target.appendChild(nodeCopy);

      // display the draggable element
      nodeCopy.classList.add('displayNone');
      addImageToSquare(square, e);
    });
  });

  getImage();
};

const addImageToSquare = (square, event) => {
  const clickedSquare = event.target;
  const turn = playerTurn();

  if (clickedSquare.classList[2] !== 'checked') {
    square.classList.add(turn === 'playerOne' ? 'nought' : 'cross', 'checked');
  }

  saveGuess(clickedSquare);
  addSounds(clickedSquare);
};

const saveGuess = (clickedSquare) => {
  if (clickedSquare.classList.contains('nought')) {
    data.playerOneGuesses.push(clickedSquare.getAttribute('value'));
  }

  if (clickedSquare.classList.contains('cross')) {
    data.playerTwoGuesses.push(clickedSquare.getAttribute('value'));
  }

  parseGuesses();
};

const parseGuesses = () => {
  const playerOne = data.playerOneGuesses;
  const playerTwo = data.playerTwoGuesses;
  const noughts = data.noughts;
  const crosses = data.crosses;
  const patterns = data.patterns;

  playerOne.forEach((element, index) => (noughts[element] = index));
  playerTwo.forEach((element, index) => (crosses[element] = index));

  for (let pattern of patterns) {
    const winner = true;
    const result = pattern.every((element) => noughts[element] !== undefined);

    if (result) {
      addSounds(null, winner);
      endGame();
    }
  }

  for (let pattern of patterns) {
    const winner = true;
    const result = pattern.every((element) => crosses[element] !== undefined);

    if (result) {
      addSounds(null, winner);
      endGame();
    }
  }
};

const playerTurn = () => {
  const buttonWrapper = document.querySelector('.overlay').classList;

  if (data.playerOneGuesses.length === 0 && buttonWrapper.contains('retry')) {
    return 'playerOne';
  }

  if (data.active.playerOne) {
    data.active.playerOne = false;
    data.active.playerTwo = true;

    return 'playerOne';
  } else if (data.active.playerTwo) {
    data.active.playerTwo = false;
    data.active.playerOne = true;

    return 'playerTwo';
  }
};

const endGame = () => {
  const squares = document.getElementsByClassName('inner-square');
  const buttonWrapper = document.querySelector('.overlay');

  buttonWrapper.classList.remove('displayNone');

  for (let square of squares) {
    square.classList.add('checked');
  }

  resetGame();
};

const resetGame = () => {
  const buttonWrapper = document.querySelector('.overlay');
  const button = document.querySelector('.reset');
  const squares = document.getElementsByClassName('inner-square');

  button.addEventListener('click', () => {
    setTimeout(removeClasses, 1300, squares, buttonWrapper);
  });

  clearData();
};

startGame();
