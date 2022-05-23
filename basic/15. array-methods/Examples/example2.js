/*
Array.isArray() – মেথডের নাম দেখেই বোঝা যাচ্ছে যে এটার রিটার্ন ভ্যালু কি ধরনের হতে পারে। আমরা পূর্বে দেখেছি যে, কোন মেথডের পূর্বে যদি is লেখা থাকে তাহলে সেটি boolean টাইপের ডাটা (true/false) রিটার্ন করে। এই মেথডের আর্গুমেন্ট হিসেবে যে ভ্যালু দেওয়া হচ্ছে সেটা অ্যারে কিনা যাচাই করা এই মেথডের কাজ। নীচের কোড লক্ষ্য করিঃ
*/

console.log(Array.isArray()); // false
console.log(Array.isArray({})); // false
console.log(Array.isArray([])); // true
console.log(Array.isArray(null)); // false
console.log(Array.isArray(undefined)); // false
console.log(Array.isArray(true)); // false
console.log(Array.isArray(17)); // false
console.log(Array.isArray('Array')); // false
console.log(Array.isArray(new Array())); // true
console.log(Array.isArray(new Array(1, 2, 3))); // true
