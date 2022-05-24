### What is closure in JavaScript?

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.

### What is the benefit of closure in JavaScript?

The advantage of closures in javascript is that it allows you to bind a variable to an execution context.

### Study the code below and What will be the output of the following code?

```js
const multiply = (x) => {
  return function (y) {
    return x * y;
  };
};

let multiply10 = multiply(10);
let multiplyFive = multiply10(5);

console.log(multiplyFive);
```

Output:

> **50**

### Study the code below and What will be the output of the following code?

```js
for (var count = 1; count <= 5; count++) {
  setTimeout(() => console.log(count), 1000);
}
```

Output:

> **6** <br> **6** <br> **6** <br> **6** <br> **6**
