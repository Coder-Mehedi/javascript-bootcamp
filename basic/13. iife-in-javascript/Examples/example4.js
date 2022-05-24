/*
For loop with var before ES6
আমরা ES6 এবং ব্লক স্কোপে let এবং const স্টেটমেন্টগুলি আসার আগে কিছু পুরানো কোডে IIFE-এর নিম্নলিখিত ব্যবহার দেখতে পাই। var স্টেটমেন্ট এ আমাদের কাছে শুধুমাত্র ফাংশন স্কোপ এবং গ্লোবাল স্কোপ আছে। ধরুন আমরা টেক্সট বাটন 0 এবং বাটন 1 দিয়ে 2টি বাটন তৈরি করতে চাই এবং আমরা সেগুলিতে ক্লিক করি, আমরা 0 এবং 1 এলার্ট করতে চাই। নিম্নলিখিত কোডটি কাজ করবে না।
*/

for (var i = 0; i < 2; i++) {
  const button = document.createElement('button');
  button.innerText = 'Button ' + i;
  button.onclick = function () {
    console.log(i);
  };
  document.body.appendChild(button);
}
console.log(i); // 2

// বাটন 0 এবং বাটন 1 ক্লিক করা হলে উভয়ই এলার্ট 2 দেখাই কারণ i গ্লোবাল, শেষ মান 2 সহ। ES6 এর আগে এই সমস্যাটি সমাধান করতে, আমরা IIFE প্যাটার্ন ব্যবহার করতে পারি।

for (var i = 0; i < 2; i++) {
  const button = document.createElement('button');
  button.innerText = 'Button ' + i;
  button.onclick = (function (copyOfI) {
    return () => {
      console.log(copyOfI);
    };
  })(i);
  document.body.appendChild(button);
}
console.log(i); // 2

// When clicked, Buttons 0 and 1 alert 0 and 1. The variable i is globally defined. Using the statement let, we could simply do:

for (let i = 0; i < 2; i++) {
  const button = document.createElement('button');
  button.innerText = 'Button ' + i;
  button.onclick = function () {
    console.log(i);
  };
  document.body.appendChild(button);
}
console.log(i); // Uncaught ReferenceError: i is not defined.

// When clicked, these buttons alert 0 and 1.
