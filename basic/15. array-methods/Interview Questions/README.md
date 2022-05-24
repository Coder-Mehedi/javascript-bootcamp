### How can you double elements of an array using reduce? Please note that you cannot create additional variables.

```js
const arrayOfNumbers = [1, 2, 3, 4];
arrayOfNumbers.reduce(
  (accumulator, currentValue, index, array) => (array[index] = array[index] * 2)
);
```
