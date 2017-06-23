////////////////////
// LET VS VAR VS CONST
////////////////////

/*
BLOCK SCOPING
- There is no such thing as block scope with var;
- Variables are defined within blocks to styalistically signal to readers that this is where these variables are used;

- 'let' keyword enforces what has styalistically been done;
- variables defined with let are bound to the scope of their definition;
- Does not mean, 'let' should replace 'var';

- 'const', like 'let', keyword enforce block scope;
- 'const' prevents a variable from being reassigned;
- 'const' does NOT prevent its value from being reassigned;
*/

// Pre-ES6 syntax:

function foo (x, y) {
  if (x > y) {
    // tmp is 'hoisted' to the scope of foo;
    // it is available before the block declaration;
    var tmp = x; 
    x = y;
    y = tmp;
  }

  for (var i = 0; i < 10; i++) {
    // 'i' is 'hoisted' to the scope of foo;
    // it is available before the block declaration;
  }
} 

// ES6 Syntax:

function foo (x, y) {
  if (x > y) {
    // tmp is bound to the scope of the if block;
    // it is available only within the block declaration;
    let tmp = x; 
    x = y;
    y = tmp;
  }

  for (let i = 0; i < 10; i++) {
    // 'i' is bound to the scope of the for loop;
    // it is available only within the block declaration;
    // each iteration creates a NEW 'i';
  }
} 

// Pre-ES6 syntax:

() => {
  for (var i = 0; i < 10; i++) {
    document.getElementById('body').onclick(function () {
      // in the context of closures, there is only 1 'i';
      // everywhere that the variable is used, is dynamically updating the same i;
      console.log(`button ${i} clicked!`);
      // every btn would output 9;
    })
  } 
}

// ES6 Syntax:

() => {
  for (let i = 0; i < 10; i++) {
    document.getElementById('body').onclick(function () {
      // in the context of closures, there is an 'i' for each iteration;
      console.log(`button ${i} clicked!`);
      // every btn would output the unique 'i' of it's iteration;
    })
  }
}
