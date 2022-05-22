/*

Let’s say we have an array of numbers and we want to create a new array which contains double of each value of the first array. Let’s see how we can solve the problem with and without Higher-Order Function.

*/

const arr1 = [1, 2, 3];

// Without Higher-order function
const arr2 = [];
for (let i = 0; i < arr1.length; i++) {
  arr2.push(arr1[i] * 2);
}

console.log(arr2); // prints [ 2, 4, 6 ]

// With Higher-order function map

const arr3 = arr1.map(function (item) {
  return item * 2;
});
console.log(arr3); // prints [ 2, 4, 6 ]

// We can make this even shorter using the arrow function syntax:

const arr4 = arr1.map((item) => item * 2);
console.log(arr2); // prints [ 2, 4, 6 ]
