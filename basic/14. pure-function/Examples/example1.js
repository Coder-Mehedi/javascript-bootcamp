{
  /*
Pure functions must not change any variable outside their scope
*/
}

// Impure function

let obj = { a: 0 };

const impure = (input) => {
  // Modifies input.a
  input.a = input.a + 1;
  return input.a;
};

let b = impure(obj);
console.log(obj); // { "a": 1 }
console.log(b); // 1
// The function changed the obj.a value that is outside it's scope.

// Pure function

let obj2 = { a: 0 };
const pure = (input) => {
  // Does not modify obj
  let output = input.a + 1;
  return output;
};

let c = pure(obj2);
console.log(obj2); // { "a": 0 }
console.log(c); // 1
// The function did not change the object obj values
