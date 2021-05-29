const getSquares = () => {
  return document.getElementsByClassName('inner-square');
};

// passing getSquares() as argument
const selectSquare = (squares) => {
  for (let square of squares) {
    square.addEventListener('click', () => addImageToSquare(square));
  }
};

// calling in selectSquare()
const addImageToSquare = (square) => {
  const nought = document.querySelector('.nought');
  const cross = document.querySelector('.cross');
  const noughtsTurn = 'noughtsTurn';
  const crossesTurn = 'crossesTurn';
  const turn = playerTurn();
  let newGame = true;

  if (turn === noughtsTurn || newGame === true) {
    if (!cross) {
      square.classList.add('nought');
      endTurn(noughtsTurn);
    }
  }
  if (turn === crossesTurn) {
    if (!nought) {
      square.classList.add('cross');
      endTurn(crossesTurn);
    }
  }

  newGame = false;
};

// calling in addImageToSquare()
const playerTurn = () => {
  return switchTurns(endTurn());
};

// calling in playerTurn()
const switchTurns = (endTurn) => {
  const noughtEndsTurn = 'noughtEndsTurn';
  const crossEndsTurn = 'crossEndsTurn';
  const noughtsTurn = 'noughtsTurn';
  const crossesTurn = 'crossesTurn';

  if (noughtEndsTurn === endTurn) {
    return crossesTurn;
  }
  if (crossEndsTurn === endTurn) {
    return noughtsTurn;
  }
};

// calling in playerTurn()
const endTurn = (placedImage) => {
  const noughtsTurn = 'noughtsTurn';
  const crossesTurn = 'crossesTurn';
  const noughtEndsTurn = 'noughtEndsTurn';
  const crossEndsTurn = 'crossEndsTurn';

  if (placedImage === noughtsTurn) {
    return noughtEndsTurn;
  }
  if (placedImage === crossesTurn) {
    return crossEndsTurn;
  }
};

const squares = getSquares();
selectSquare(squares);
