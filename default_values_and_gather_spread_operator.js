////////////////////
// DEFAULT VALUES
////////////////////

// ES6 allows default values to be set directly in the parameter list;
// Default values previously were imperative and needed to be checked manually;
// ES6 introduces a declarative form of default values;
// Default parameters can reference other parameters;

// Pre-ES6 syntax:

function foo (x) {
  // check if parameters were passed in, and assign default;
  X = x !== undefined ? x : 42;
}

// ES6 Syntax:

// assign default values directly in the parementers;
function foo (x = 42) {
}

////////////////////
// LAZY EXPRESSIONS
////////////////////

/*
- Expressions are only called when needed;
- No such thing as lazy expressions in javascript but behavior syntactically acts as lazy expression;
- NOTE: there is a new invocation of bar each time foo is called;
*/

// ES6 Syntax:

function bar() {
  console.log("!");
}

function foo (x = bar()) {

}

// function 'bar' is called 0 times because an argument is passed to foo;
foo(5);

// function bar is now called once because no argument is passed to foo;
foo();

////////////////////
// GATHER AND SPREAD OPERATORS
////////////////////

/*
- Previously, functions had arguments object;
- Arguments object is array like object but does not have native array functions;
*/

// Pre-ES6 syntax:

function foo (x, y, z) {
  // process to turn arguments into a real array;
  var args = [].slice.call(arguments);

  // add a new value to front of new args array;
  args.unshift(42);

  // to pass along values in args are unique parameters to another function;
  bar.apply(null, args);
}

// ES6 Syntax:

// gather operator has the ability to gather all arguments not already accounted for;
function foo (...args) { //---> args === [x, y, z]
  // args is now a real array;

  // spread operator can now be used to 'spread' out values in array as unique arguments passed into bar;
  // other arguments can still be added as necessary;
  bar(42, ...args); // ---> bar(42, x, y, z)
}

/*
- Array literals use concat to combine array values along with adding new values;
- The gather/spread operator can be used to achieve the same results;
*/

// Pre-ES6 syntax:

var x = [1, 2, 3];
var y = [4, 5];
var z = [0].concat(x, y, [6]);

// ES6 Syntax:

var x = [1, 2, 3];
var y = [4, 5];
var z = [0, ...x, ...y, 6];
