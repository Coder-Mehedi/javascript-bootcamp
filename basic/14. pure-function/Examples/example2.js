{
  /*
Pure functions must not rely on variables outside their scope
*/
}

// Impure function

let a = 1;

let impure = (input) => {
  // Multiply with variable outside function scope
  let output = input * a;
  return output;
};

console.log(impure(2)); // 2
a++; // a becomes equal to 2
console.log(impure(2)); // 4

// This impure function rely on variable a that is defined outside it's scope. So, if a is modified, impure's function result will be different.

// Pure function

let pure = (input) => {
  let a = 1;
  // Multiply with variable inside function scope
  let output = input * a;
  return output;
};

console.log(pure(2)); // Logs 2
// The pure's function result does not rely on any variable outside it's scope.
