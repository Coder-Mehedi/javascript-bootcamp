### কলব্যাক ফাংশন কি?

সহজ কথায়, কলব্যাক ফাংশন হচ্ছে এমন একটি ফাংশন যেটি অন্য একটি ফাংশনে আর্গুমেন্ট হিসাবে পাস করা ফাংশন, যেটি কোন কাজ সম্পন্ন করার জন্যে আউটার ফাংশনের ভিতরে ইনভোক হয়।

### হাইয়ার অর্ডার ফাংশন কি?

যে ফাংশনে অন্য কোন ফাংশনকে আর্গুমেন্ট হিসাবে পাস করা হয় বা কোন ফাংশন অন্য কোন ফাংশনকে রিটার্ন করে তাকে হাইয়ার অর্ডার ফাংশন বলা হয়।

### Is callback is higher-order function?

It's of a higher order. It can have whole other functions, like a level above. Callback function is the little baby one that gets passed in. So the outer function that takes in the function is a higher-order function.

## When should I use higher order functions?

Higher order functions are also commonly used to abstract how to operate on different data types. For instance, . filter() doesn't have to operate on arrays of strings. It could just as easily filter numbers, because you can pass in a function that knows how to deal with a different data type.

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
