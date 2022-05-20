/*

Let’s say we have an array containing the birth year of different persons and we want to create an array that contains their ages. For example:

*/

const birthYear = [1975, 1997, 2002, 1995, 1985];

// Without Higher-order function
const ages = [];
for (let i = 0; i < birthYear.length; i++) {
  let age = 2018 - birthYear[i];
  ages.push(age);
}

console.log(ages); // prints [ 43, 21, 20, 23, 32 ]

// With Higher-order function map
const ages2 = birthYear.map((year) => 2018 - year);
console.log(ages2); // prints [ 43, 21, 20, 23, 32 ]
