// ;( function( Global, React ){

//  var Greets = function( firstName, lastName, language ){

//     return new Greets.int(firstName, lastName, language);

//  };

//   let greetings = {
//     en: 'How do you do',
//     es: 'Buenos dias',
//   };

//   let languages = ['en', 'es'];

//   Greets.prototype = {

//     validate: function(){

//       if( languages.indexOf( this.language ) === -1 ) throw `${ this.language } is not a valid language`;

//     },
//     greet: function ( language ){

//       $msg = `Welcome ${ this.firstName }, ${ greetings[ this.language ] } `;
 
//       return $msg;

//     },
//     changeLanguage: function ( language ){

//       this.language = language;

//       this.validate();

//       return this;
// }
//   };

//   Greets.int = function( firstName = '', lastName = '', language = 'en' ){

//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.language = language;

//   };

//   Greets.int.prototype = Greets.prototype;

//   Global.Greets = Global.$G = Greets;

// }( window ) );


let numbers = [

  { type:  'number 1',
    two:   2,
    three: 3,
  },
  { type:  'number 2',
    two:   2,
    three: 3,
  }

              ];

function sameAsType( type ){

 return function( numberArray ){

  return numberArray.type === type;

 };

}

 filteredNumber = function( type ) {
   
 return numbers.filter( sameAsType( type ) );
 
};

 let result = filteredNumber('number 1');

 console.log(result);


