  const button     = document.querySelector('.calculator-keys'),
        screen     = document.getElementById('screen');    
        
  let   firstValue,  
        secondValue,  
        thirdValue,
        firstValueArray = [],
        secondValueArray = [],
        thirdValueArray = [],
        numberObj = {},
       
        beenCalculated = false;  

        
    calculator = function ( event ) { 
          
      numberObj ={

      operators : ['+' , '-' , '*', '/'],
      numbers : [1, 2, 3, 4, 5 ,6, 7, 8, 9, 0],
      valueOne: [],
      valueTwo: [],

      };

      if( event.target.closest('button') ){

        const key = event.target,
              keyValue = key.textContent,
              operators = ['+' , '-' , '*', '/'],
              hasOperators = operators.some(operator => keyValue.includes(operator));
       
      // START CONDITIONALS
      if( screen.value === '0' || beenCalculated === true ){

          if( key.classList.contains('key')  ){ firstValue = keyValue; screen.value = firstValue;
            
            // firstValueArray.push(firstValue);
            // numberObj.valueOne = firstValue ;
          }   

      } else {

                  if( hasOperators ){ secondValue = keyValue; screen.value = screen.value + ' ' + secondValue ;
                  
                  // secondValueArray.push(secondValue);
                  numberObj.secondValue = secondValue;
                  
                 
                  console.log('secondValue') ;
                  } else {
                  
                  if( key.classList.contains('key') ) { thirdValue = keyValue; screen.value = screen.value + ' ' + thirdValue ;
                  

                  console.log('thirdValue') ;
                  // thirdValueArray.push(thirdValue);
                  numberObj.thirdValue = thirdValue;
                    
                  }
                             
                        }

                 if(thirdValue )
                        
                        
                  if(  key.classList.contains('equal-sign') ) calculate(  hasBeenCalculated, firstValue, secondValue, thirdValue );

                                                      
            } 
        
       if( key.classList.contains('all-clear') ) screen.value = '0';
       //END CONDITIONALS
       
    }
  
    };
      
     
      // test = function(){

      //    console.log( numberObj);

      // };
   
    
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