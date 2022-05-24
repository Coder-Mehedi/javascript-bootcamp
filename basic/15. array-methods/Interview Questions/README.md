### How can you double elements of an array using reduce? Please note that you cannot create additional variables.

```js
const arrayOfNumbers = [1, 2, 3, 4];
arrayOfNumbers.reduce(
  (accumulator, currentValue, index, array) => (array[index] = array[index] * 2)
);
```

### What will be the output of this code?

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const mapped_arr = arr.map((e) => e + 10);

console.log(mapped_arr);
```

**Output: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]**

### What will be the output of this code?

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filtered_arr = arr.filter((e) => e % 2 == 0);

console.log(filtered_arr);
```

**Output: [2, 4, 6, 8, 10]**
