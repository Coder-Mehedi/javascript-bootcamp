### What is a pure function?

একটি পিওর ফাংশন হল একটি ফাংশন যেখানে রিটার্ন মান শুধুমাত্র কোন পার্শ্ব প্রতিক্রিয়া ছাড়াই তার আর্গুমেন্ট দ্বারা নির্ধারিত হয়। অর্থাৎ, আপনি যদি একই আর্গুমেন্টের সাথে একটি ফাংশনকে কল করেন 'n' সংখ্যার বার এবং 'n' নম্বর অ্যাপ্লিকেশনে তাহলে এটি সর্বদা একই ভ্যালু রিটার্ন করবে ।

pure এবং impure ফাংশনের মধ্যে পার্থক্য দেখতে একটি উদাহরণ নেওয়া যাক

```js
//Impure
let numberArray = [];
const impureAddNumber = (number) => numberArray.push(number);
//Pure
const pureAddNumber = (number) => (argNumberArray) =>
  argNumberArray.concat([number]);

//Display the results
console.log(impureAddNumber(6)); // returns 1
console.log(numberArray); // returns [6]
console.log(pureAddNumber(7)(numberArray)); // returns [6, 7]
console.log(numberArray); // returns [6]
```
