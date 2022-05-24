/*

অবজেক্ট এর ক্ষেত্রেও সেইম। কোনো ফাংশনের ভিতরে ডিক্লেয়ার করা হলে সেটা ঐ ফাংশনের লোকাল স্কোপ পাবে। উক্ত ফাংশনের ভিতরে ছাড়া আর কোথাও অ্যাক্সেস করা যাবে না। আর বাইরে গ্লোবাল স্কোপে ডিক্লেয়ার করা হলে সেটা গ্লোবাল স্কোপ পাবে এবং সব জায়গা থেকে অ্যাক্সেস করা যাবে।

অবজেক্ট কোনো ফাংশনের ভিতরে ডিক্লেয়ার করা হয়, তাহলে সেই অবজেক্ট সেই ফাংশনের লোকাল স্কোপ পাবে এবং শুধুমাত্র সেই ফাংশনের ভিতর থেকেই অ্যাক্সেস করা যাবে। কিন্তু এখন যদি এই অবজেক্ট উক্ত ফাংশনের বাইরে অ্যাক্সেস করতে চাই তাহলে এরর আসবে। কারণ এটা লোকাল স্কোপে ডিক্লেয়ারকৃতঃ
*/

var person = {
  name: 'Mehedi Hasan',
  age: 24,
};

console.log(person); // { name: 'Mehedi Hasan', age: 24 }

function objectFunc() {
  var localObj = {
    name: 'Mehedi Hasan',
    age: 24,
  };
  console.log(localObj);
}

objectFunc(); // { name: 'Mehedi Hasan', age: 24 }

console.log(localObj); // ReferenceError: localObj is not defined