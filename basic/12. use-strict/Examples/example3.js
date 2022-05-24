/*
আপনি জাভাস্ক্রিপ্টে ভেরিয়েবল কি-ওয়ার্ড ডিক্লেয়ার না করেও কাজ করতে পারবেন। কারণ আমরা জানি জাভাস্ক্রিপ্টে ভেরিয়েবলের নামের আগে ভেরিয়েবল কি-ওয়ার্ড ব্যবহার না করলে এটি বাই-ডিফল্ট উইন্ডো অবজেক্টের আন্ডারে এক্সিকিউট হয়।
*/

num = 10;

console.log(num); // 10

// একই কোড যখন আমরা “use strict” ব্যবহার করে এক্সিকিউট করবো, আমরা একটা Uncaught ReferenceError: num is not defined পাবো।

('use strict');

num = 10;
console.log(num); // Uncaught ReferenceError: num is not defined
