  const button     = document.querySelector('.calculator-keys'),
        screen     = document.getElementById('screen');    
        
  let   firstValue,  
        secondValue,  
        total = [],
    
        beenCalculated = false;  

        
    calculator = function ( event ) { 
          

      if( event.target.closest('button') ){

        const key = event.target,
              keyValue = key.textContent;
            //   operators = ['+' , '-' , '*', '/'],
            //   hasOperators = operators.some(operator => keyValue.includes(operator));
       
      // START CONDITIONALS
      if( screen.value === '0' || key.classList.contains('all-clear') ){
         
          total = [];
          if( key.classList.contains('key') ){ 
          
          firstValue = keyValue; 
          screen.value = firstValue;
            
          total.push(firstValue);
          console.log(total);
          }   

      } else {
                  if( !key.classList.contains('equal-sign') ){

                  secondValue = keyValue; 
                  screen.value = screen.value + ' ' + secondValue;

                  total.push(secondValue);   
                  console.log(total);
                  }
                        

                  if(  key.classList.contains('equal-sign') ) {

                  let joinedArrayTotal = total.join('');
               
                  let final = eval(joinedArrayTotal);
                        screen.value = final;
                        console.log(final);
                  }
                                                       
            } 
        
       if( key.classList.contains('all-clear') ) { 
          
           screen.value = '0'; 
         
        }
       
     }
  
    };

         //addEventListener is what passes the event object: we can call the parameter/argument anything we want
         button.addEventListener('click', calculator, false);