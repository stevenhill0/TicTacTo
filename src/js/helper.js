import { data } from './data.js';

export const addSounds = (clickedSquare, winner) => {
  const setDownImage = new Audio('./src/audio/set-down.wav').play();
  const youWin = new Audio('./src/audio/you-win.wav');

  if (clickedSquare) {
    setDownImage;
  }

  if (winner) {
    youWin.play();
  }
};

export const removeClasses = (squares, buttonWrapper) => {
  const classes = ['nought', 'cross', 'checked'];

  for (let square of squares) {
    square.classList.remove(...classes);
  }

  buttonWrapper.classList.add('displayNone', 'retry');
};

export const clearData = () => {
  data.playerOneGuesses.splice(0, data.playerOneGuesses.length);
  data.playerTwoGuesses.splice(0, data.playerTwoGuesses.length);
  data.noughts = {};
  data.crosses = {};
};
