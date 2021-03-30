  const button     = document.querySelector('.calculator-keys'),
        screen     = document.getElementById('screen');    
        
  let   firstValue,  
        secondValue,  
        total = [],  

        
    calculator = function ( event ) { 

      if( event.target.closest('button') ){

        const key = event.target,
              keyValue = key.textContent;
            
      // START CONDITIONALS
      if( screen.value === '0' && !key.classList.contains('equal-sign') && !key.classList.contains('all-clear') ){
         
          total = [];
          
          firstValue = keyValue; 
          screen.value = firstValue;
        
          total.push(firstValue); 

      } else {
                  if( !key.classList.contains('equal-sign') ){

                  secondValue = keyValue; 
                  screen.value = screen.value + ' ' + secondValue;

                  total.push(secondValue);  
                
                  }
                     

                  if(  key.classList.contains('equal-sign') ) {
                  
                  let joinedArrayTotal = total.join('');
               
                  let final = eval(joinedArrayTotal);
                  screen.value = final;
       
                  }
        
                    if( key.classList.contains('all-clear')  ) screen.value = '0'; 
                        
            } // END CONDITIONALS
      }
    };

         //addEventListener is what passes the event object: we can call the parameter/argument anything we want
         button.addEventListener('click', calculator, false);