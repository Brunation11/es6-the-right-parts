////////////////////
// THE ARROW FUNCTION
////////////////////

/*
=> meant to replace 'function'

Pre-ES6 syntax:

function foo () {
  return 2;
}

ES6 Syntax:

foo = () => 2;

- Parenthesis denote parameter list;
  - When only one param, no parenthesis necessary ---> x => x;
*/

// VARIATIONS:

/*
Parameters:
  - Parenthesis used as place holder when no parameter passed in;
*/

// When 1 or less arguments, parenthesis can be used as a placeholder;
() => 3;
// same as:
_ => 3;
// same as:
x => 3;
// Multi paremeter functions must wrap parameters in parenthesis;
(x, y) => 3;

/*
Function Body:
  - Implicit return when function body is not wrapped in curly braces;
  - Only valid if return statement is on the same line as function definition;
*/

// Implicitly return of 3;
() => 3;
// Return keyword needed if curly braces used;
() => { return 3 };

/*
Syntactically Anonymous:
  - Can not have named functions;
  - Can not make self reference to itself;
  - Must rely on outer variable to reference itself;
  - Stack trace errors do not have named reference;
*/

// Pre-ES6 syntax:

// Function has name;
function foo () {};

// Anonymous function:
() => {}

/*
Promises:
  - Can not have named functions;
  - Can not make self reference to itself;
  - Stack trace errors do not have named reference;
*/

// Pre-ES6 syntax:

// Function has name:
// p.then( function extractId (x) { return x.id } );

// Anonymous function:
// p.then( x => x.id )

/*
Where does the arrow function shine?:
  - There is no 'this' keyword for an arrow function;
  - It can not be bound to a 'this' keyword;
  - It will automatically go up one level in scope and take the context (this) of it's parent;
*/

// Pre-ES6 syntax:

// Bind this:
var obj = {
  id: 42,
  foo: function foo () {
    setTimeout(function () {
      console.log(this.id);
    }.bind(this), 100); // --> if bind is not used, this references the global scope and not 'obj'
  }
};

// No this binding:
var obj = {
  id: 42,
  foo: function foo () {
    setTimeout(() => {
      console.log(this.id);
    }, 100); // --> if bind is not used, this references the global scope and not 'obj'
  }
};

obj.foo();
