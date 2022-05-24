### What is the difference between Call, Apply and Bind

**Call():** Call() মেথড প্রথম প্যারামিটার হিসাবে “this” এর ভ্যালু সেট করে। তারপর যে প্যারামিটারগুলো থাকবে সেগুলো হবে ফাংশনের প্যারামিটার। Call() মেথড ইনডিভিজুয়াল প্যারামিটার নেয়।

**Apply():** Apply() মেথড এবং Call() মেথডের মাঝে বিশেষ কোন পার্থক্য নেই। দুটাই ফাংশনকে ইমিডিয়েটলি ইনভোক করে এবং Apply() মেথড আর্গুমেন্টস হিসাবে একটা Array নেয়।

**Bind():** Bind() মেথড হচ্ছে Call() এবং Apply() মেথডের বিপরীত। কারণ Call () এবং Apply() মেথড ইমিডিয়েটলি ইনভোক করে ফেলে। কিন্তু Bind() মেথড সেটা না করে সে একটা ফাংশন ডেফিনেশন রিটার্ন করে। যা আপনি পরবর্তীতে যেকোন সময়, যেকোন জায়গায় আপনার ইচ্ছা মত ব্যবহার করতে পারবেন।

### What is Call () method in JavaScript?

The call() method is a predefined JavaScript method. It can be used to invoke (call) a method with an owner object as an argument (parameter). With call() , an object can use a method belonging to another object.

### The Difference Between call() and apply()

The difference is: The call() method takes arguments separately. The apply() method takes arguments as an array. The apply() method is very handy if you want to use an array instead of an argument list

### What is the purpose of the bind () function?

The bind() function creates a new bound function, which is an exotic function object (a term from ECMAScript 2015) that wraps the original function object.Apr 23, 2022
