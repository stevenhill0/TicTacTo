  const button   = document.querySelector('.calculator-keys'),
        screen = document.getElementById('screen');    
  let   firstValue,  
        secondValue,  
        thirdValue;  

        

    calculator = function ( event ) {  

      if( event.target.closest('button') ){

        const key = event.target;
        const keyValue = key.textContent;
        const operators = ['+' , '-' , '*', '/']; 
       

      if( screen.value === '0' ){
      
       let hasOperators = operators.some(operator => keyValue.includes(operator));

          if( !hasOperators  ){ 
        
          firstValue = keyValue;
          screen.value = firstValue;

          console.log(firstValue );

          }   

      } else {
       
      let hasOperators = operators.some(operator => keyValue.includes(operator));
      
      
      if( hasOperators ){

        secondValue = keyValue;
        screen.value = screen.value + ' ' + secondValue ;
      
        console.log(secondValue );
       
       
      } else {
       
        if( !key.classList.contains('equal-sign') ) {  

          thirdValue = keyValue;
          screen.value = screen.value + ' ' + thirdValue ;
         
          console.log(thirdValue );
         
        }
     
       
             }

        if(  key.classList.contains('equal-sign') ) {
        
        calculate(firstValue, secondValue, thirdValue);

      
                                                     } 
            
       } 
                                     
    }
  
    };

 
    calculate = function( firstValue = '', secondValue = '', thirdValue = '' ){
        
                let firstNumber =  parseInt(firstValue);
                let thirdNumber =  parseInt(thirdValue);

                if(secondValue.includes('+') ) screen.value = firstNumber + thirdNumber;
                if(secondValue.includes('-') ) screen.value = firstNumber - thirdNumber;
                if(secondValue.includes('*') ) screen.value = firstNumber * thirdNumber;
                if(secondValue.includes('/') ) screen.value = firstNumber / thirdNumber;
               
                return screen.value;

          };
                         




         //addEventListener is what passes the event object: we can call the parameter/argument anything we want
         button.addEventListener('click', calculator, false);