/*
Array.from() – এটি Array অবজেক্টের একটি স্ট্যাটিক মেথড যেটি মূলত iterable বা পুনরাবৃত্তিযোগ্য কোন ভেরিয়েবল থেকে নতুন একটি অ্যারে তৈরীতে ব্যবহৃত হয়। এছাড়াও এটা দিয়ে আরো কিছু কাজ করা যায়, সেটা আমরা নীচের ছোট্ট একটা উদাহরণের মাধ্যমে দেখবো।
*/

let str = 'Vivasoft';
let arr = [1, 2, 3];
console.log(Array.from(str)); // ["V", "i", "v", "a", "s", "o", "f", "t"];
console.log(Array.from(arr, (x) => x * x)); // [1, 4, 9]

{
  /*
    আমরা জানি একটা স্ট্রিং কে str[0], str[1] এভাবে ইনডেক্স অনুযায়ী এক্সেস করা যায়, আর তাই এটি একটি পুনরাবৃত্তিযোগ্য ভেরিয়েবল এবং সেই অনুযায়ী Array.from() মেথডটি এটিকে একটি নতুন অ্যারেতে রূপান্তরিত করেছে। 
    */
}
