const selectSquare = () => {
  const squares = document.getElementsByClassName('inner-square');

  for (let square of squares) {
    square.addEventListener('click', () => addImageToSquare(square));
  }
};

const addImageToSquare = (square) => {
  const nought = document.querySelector('.nought');
  const cross = document.querySelector('.cross');
  const turn = playerTurn();
  let newGame = true;

  if (turn || newGame === true) {
    if (!cross) {
      square.classList.add(turn ? 'nought' : 'cross', 'checked');
    }
  }

  newGame = false;
};

const playerTurn = () => {
  const checked = document.querySelector('.checked');
  if (checked) {
  }
};

selectSquare();
