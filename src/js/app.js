  const button     = document.querySelector('.calculator-keys'),
        screen     = document.getElementById('screen');    
        
  let   firstValue,  
        secondValue,  
        thirdValue,
        beenCalculated = false;  

        
    calculator = function ( event ) {  

      if( event.target.closest('button') ){

        const key = event.target,
              keyValue = key.textContent,
              operators = ['+' , '-' , '*', '/'],
              hasOperators = operators.some(operator => keyValue.includes(operator));
       
      // START CONDITIONALS
      if( screen.value === '0' || beenCalculated === true ){

          if( key.classList.contains('key')  ){  firstValue = keyValue; screen.value = firstValue;
        
          console.log(firstValue );

          }   

      } else {
       
                  if( hasOperators ){ secondValue = keyValue; screen.value = screen.value + ' ' + secondValue ;
                  
                    console.log(secondValue );
                  
                  } else {
                  
                  if( !key.classList.contains('equal-sign') ) { thirdValue = keyValue; screen.value = screen.value + ' ' + thirdValue ;
                  
                      console.log(thirdValue );
                  
                  }
            
                  
                        }

                  if(  key.classList.contains('equal-sign') ) calculate(  hasBeenCalculated, firstValue, secondValue, thirdValue );

                                                            
            } 
        
       if( key.classList.contains('all-clear') ) screen.value = '0';
       //END CONDITIONALS
       
    }
  
    };

 
      calculate = function(callBackFunction , firstValue = '', secondValue = '', thirdValue = '' ){
        
                let firstNumber =  parseInt(firstValue);
                let thirdNumber =  parseInt(thirdValue);

                if(secondValue.includes('+') ) screen.value = firstNumber + thirdNumber;
                if(secondValue.includes('-') ) screen.value = firstNumber - thirdNumber;
                if(secondValue.includes('*') ) screen.value = firstNumber * thirdNumber;
                if(secondValue.includes('/') ) screen.value = firstNumber / thirdNumber;
               
                callBackFunction();
                return screen.value;

          };
                         
     hasBeenCalculated = function(){

           return beenCalculated === true ;

     };



         //addEventListener is what passes the event object: we can call the parameter/argument anything we want
         button.addEventListener('click', calculator, false);