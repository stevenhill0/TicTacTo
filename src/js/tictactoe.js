const startGame = () => {
  selectSquare();
};

const selectSquare = () => {
  const squares = document.getElementsByClassName('inner-square');

  for (let square of squares) {
    square.addEventListener('click', (event) =>
      addImageToSquare(square, event)
    );
  }
};

const addImageToSquare = (square, event) => {
  const clickedSquare = event.target;
  const turn = playerTurn();

  if (clickedSquare.classList[2] !== 'checked') {
    square.classList.add(turn === 'playerOne' ? 'nought' : 'cross', 'checked');
  }

  saveGuess(clickedSquare);
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
    const result = pattern.every((element) => noughts[element] !== undefined);

    if (result) {
      console.log('NOUGHTS WINS');
    }
  }

  for (let pattern of patterns) {
    const result = pattern.every((element) => crosses[element] !== undefined);
    if (result) {
      console.log('CROSSES WINS');
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

startGame();
