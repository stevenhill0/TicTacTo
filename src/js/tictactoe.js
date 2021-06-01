const startGame = () => {
  selectSquare();
};

const selectSquare = () => {
  const squares = document.getElementsByClassName('inner-square');

  for (let square of squares) {
    square.addEventListener('click', (event) => {
      addImageToSquare(square, event);
    });
  }
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

const addSounds = (clickedSquare, winner) => {
  const setDownImage = new Audio('./src/audio/set-down.wav').play();
  const youWin = new Audio('./src/audio/you-win.wav');

  if (clickedSquare) {
    setDownImage;
  }

  if (winner) {
    youWin.play();
  }
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

const data = {
  patterns: [
    ['one', 'two', 'three'],
    ['four', 'five', 'six'],
    ['seven', 'eight', 'nine'],
    ['one', 'four', 'seven'],
    ['two', 'five', 'eight'],
    ['three', 'six', 'nine'],
    ['three', 'five', 'seven'],
    ['three', 'five', 'seven'],
    ['one', 'five', 'nine'],
  ],
  active: {
    playerOne: true,
    playerTwo: true,
  },
  playerOneGuesses: [],
  playerTwoGuesses: [],
  noughts: {},
  crosses: {},
};

const playerTurn = () => {
  const buttonWrapper = document.querySelector('.overlay');
  if (
    data.playerOneGuesses.length === 0 &&
    buttonWrapper.classList.contains('retry')
  ) {
    return 'playerOne';
  }
  if (data.active.playerOne === true) {
    data.active.playerOne = false;
    data.active.playerTwo = true;

    return 'playerOne';
  } else if (data.active.playerTwo === true) {
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

  button.addEventListener(
    'click',
    setTimeout(() => {
      const classes = ['nought', 'cross', 'checked'];

      for (let square of squares) {
        square.classList.remove(...classes);
      }

      buttonWrapper.classList.add('displayNone', 'retry');

      clearData();
    }, 1500)
  );
};

const clearData = () => {
  data.playerOneGuesses.splice(0, data.playerOneGuesses.length);
  data.playerTwoGuesses.splice(0, data.playerTwoGuesses.length);
  data.noughts = {};
  data.crosses = {};
};

startGame();
