{
  /*
Array.prototype.at() – এই মেথডের কাজ হলো কোন ইডেক্স অনুযায়ী একটি অ্যারে থেকে তার মান রিটার্ন করা। ধরুন আমাদের কাছে একটি অ্যারে আছে, let arr = [1,2,3,4]; এখানে arr.at(1) আমাদেরকে 2 রিটার্ন করবে, মানটি আমরা arr[1] এভাবেও পেতে পারি। তাহলে at() মেথড কেন ব্যবহার করবো?? at() মেথডের মজার একটি ব্যাপার হচ্ছে এটি নেগেটিভ ইনডেক্স অনুযায়ী কাজ করতে পারে তবে সেটা উল্টো দিক থেকে অর্থাৎ আপনি যদি ইনডেক্স হিসেবে -1 ব্যবহার করেন তবে সে আপনাকে অ্যারেটির সবথেকে শেষের ভ্যালু রিটার্ন করবে, -2 ব্যবহার করলে শেষের আগের ভ্যালু রিটার্ন করবে।
*/
}

let arr = [92, 46, 71, 87, 39];
console.log(arr.at(0)); // 92
console.log(arr.at(-1)); // 39
console.log(arr[-1]); // undefined
