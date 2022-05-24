### Question 1: What is IIFE(Immediately Invoked Function Expression)

IIFE (Immediately Invoked Function Expression) হল একটি ফাংশন যা একটি এক্সপ্রেশন হিসাবে ডিক্লেয়ার এবং ডিক্লেয়ারেশনের পরপরই এক্সিকিউট হয়।

```js
(function () {
  // logic here
})();
```

একটি IIFE ব্যবহার করার প্রাথমিক কারণ হল ডেটা গোপনীয়তা রক্ষা করা কারণ IIFE-এর মধ্যে ডিক্লেয়ার করা কোনো ভেরিয়েবল বাইরে অ্যাক্সেস করা যায় না। অর্থাৎ, আপনি যদি IIFE এর সাথে ভেরিয়েবল অ্যাক্সেস করার চেষ্টা করেন তবে এটি নীচের মতো একটি error দেয়,

```js
(function () {
  var message = 'IIFE';
  console.log(message);
})();
console.log(message); //Error: message is not defined
```
