var guess,
    guesses = 0,
    hits = 0,
    location1 = Math.floor(Math.random()*5);
    location2 = location1 +1,
    location3 = location2 +1,
    isSunk = false;

    //loop while not sunk
    while ( isSunk == false ) {
     
     //prompt to enter a number 
    guess  = prompt('Insert any number between 0-6 and try sink MY battleship!: ');

     //validate guess: only between 0-6
     if( guess < 0 || guess > 6 ){
         alert('Please insert a valid number.');
     } else {

        //add 1 to guesses
            guesses = guesses +1;

        // assign guess to locations 1-3
       if(guess == location1 || guess == location2 || guess == location3 ){
        
         //Add Hit
         hits = hits + 1; 

         //Alert Hit
         alert('HIT');

        //if hits = 3 change sunk to true. Send an alert you have sunk ship
        if( hits == 3 ){

           isSunk = true;
           alert('You have SUNK MY Battleship!!!');

                       }
            } else {

            alert('MISS!');
                
                    }
            }  
       
    }

     // give guess stats (by grabbing guess value) and alert it out
     var stats = 'It took you ' + guesses + ' guesses to sink MY Battleship.' + ' Your average of hits is ' + (3/guesses*100) +'%' ;
     alert(stats);
      
    
