Study the code below and What will be the output of the following code?

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
