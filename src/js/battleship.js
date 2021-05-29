var model = {
	boardSize: 7,
	numShips: 3,
	shipLength: 3,
	shipsSunk: 0,
	 
	ships: [
		{ locations: ['0', '0', '0'], hits: ["", "", ""] },
		{ locations: ['0', '0', '0'], hits: ["", "", ""] },
		{ locations: ['0', '0', '0'], hits: ["", "", ""] }
	],
	fire: function(guess){

		for ( let i = 0; i < this.numShips; i++ ) {

		let ship = this.ships[i];
		let index = ship.locations.indexOf(guess);

		if  ( index >= 0 ){

			ship.hits[index] = 'hit';
			view.displayHit(guess);
			view.displayMessage('HIT!');
			if ( this.isSunk(ship) ) {
				view.displayMessage('you sank my battleship!');
				this.shipsSunk++;

			}

			return true;
		}
			
		}
		view.displayMiss(guess);
		view.displayMessage('you missed.');
		return false;
	},
	isSunk: function( ship ) {

		for ( let i = 0; i < this.shipLength; i++ ) {

			if ( ship.hits[i] !== 'hit' ){
				return false;
	}	

}
				return true;
	},
	generateShipLocations: function(){
		var locations;
		for (var i = 0; i < this.numShips; i++) {

			do {

				locations = this.generateShip();

			} while (this.collision(locations));

			this.ships[i].locations = locations;

			}

		},
	generateShip: function(){
		var direction = Math.floor(Math.random() * 2);
		var row, col;

		if ( direction === 1 ) {

			row = Math.floor( Math.random() * this.boardSize );
			col = Math.floor( Math.random() * ( this.boardSize - this.shipLength ) );

		} else {

			row = Math.floor( Math.random() * ( this.boardSize - this.shipLength ) );
			col = Math.floor( Math.random() * this.boardSize );

		}

		var newShipLocations = [];
		for (var i = 0; i < this.shipLength; i++ ){

			if ( direction === 1 ){

				newShipLocations.push( row + '' + (col + i));

			} else {

				newShipLocations.push( (row + i ) + '' + col );
				
			}
		}

	return newShipLocations;

	},
	collision: function(locations){

		for ( var i = 0; i < this.numShips; i++ ) {

			var ship = model.ships[i];

			for (var j = 0; j < locations.length; j++ ){

				if (ship.locations.indexOf( locations[j] ) >= 0 ){
					return true;
				}

			}

		}
		return false;
	}
}; 


var view = {
	displayMessage: function(msg) {
		var messageArea = document.getElementById('messageArea');
		messageArea.innerHTML = msg;
	},

	displayHit: function(location) {
		var cell = document.getElementById(location);
		cell.setAttribute('class', 'hit');
	},

	displayMiss: function(location) {
		var cell = document.getElementById(location);
		cell.setAttribute('class', 'miss');
	}

}; 

var controller = {

guesses : 0,

processGuesses : function(guess){

	var location = this.parseGuess(guess);
	if (location){

		this.guesses++;
		var hit = model.fire(location);

		if (hit && model.shipsSunk === model.numShips){

			view.displayMessage('You sank all mt battleships, in ' + this.guesses + ' guesses.');

		}
	}
},
parseGuess : function(guess){

	let alphabet = [ 'A','B','C','D','E','F' ];

	if ( guess === null || guess.length !== 2 ){

            alert('Please type in the correct input');

	} else {

	firstChar = guess.charAt( 0 );
    var row   = alphabet.indexOf(firstChar);
	var column = guess.charAt( 1 );

	if ( isNaN(row) || isNaN(column) ){

		alert('Oops, that is not on the board');

	} else if( row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize ) {

		alert('Oops, that is off the board');

	} else {

		return row + column ;
	}

		return null;

	}

}



};


function init() {

	var fireButton = document.getElementById('fireButton');
		fireButton.onclick = handleFireButton;
	var guessInput = document.getElementById('guessInput');
	guessInput.onkeypress = handleKeyPress;

	model.generateShipLocations();

}

function handleFireButton(){

	var guessInput = document.getElementById('guessInput');
	var guess = guessInput.value;
	controller.processGuesses(guess);

	guessInput.value = '';

}

function handleKeyPress(e){
	var firebutton = document.getElementById('fireButton');
	if (e.keyCode === 13){
		fireButton.click();
		return false;
	}
}

window.onload = init;

// controller.processGuesses('A0');

// controller.processGuesses('A6');
// controller.processGuesses('B6');
// controller.processGuesses('C6');

// controller.processGuesses('C4');
// controller.processGuesses('D4');
// controller.processGuesses('E4');

// controller.processGuesses('B0');
// controller.processGuesses('B1');
// controller.processGuesses('B2');




