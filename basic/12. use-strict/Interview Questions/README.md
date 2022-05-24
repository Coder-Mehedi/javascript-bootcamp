### What is a strict mode in javascript?

Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a “strict” operating context. This way it prevents certain actions from being taken and throws more exceptions. The literal expression "use strict"; instructs the browser to use the javascript code in the Strict mode.

### How do you declare strict mode

“use strict” ডিরেক্টিভকে আমরা দুইভাবে ব্যবহার করতে পারি। গ্লোবাল ডিক্লারেশন হিসাবে এবং ফাংশন ডিক্লারেশন হিসাবে।

**গ্লোবাল ডিক্লারেশনঃ**
যখন আমরা গ্লোবাল ডিক্লারেশন হিসাবে “use strict” ব্যবহার করি, তখন ঐ পেজের সমস্ত জাভাস্ক্রিপ্ট কোড স্ট্রিক মোডে এক্সিকিউট হয়।

```js
'use strict';

console.log('Hello JavaScript');
```

**ফাংশন ডিক্লারেশনঃ**
যখন আমরা ফাংশন ডিক্লারেশন হিসাবে “use strict” ব্যবহার করি, তখন ফাংশনের ভিতরের সমস্ত জাভাস্ক্রিপ্ট কোড স্ট্রিক মোডে এক্সিকিউট হয়। ফাংশনের বাহিরে সব কোড নর্মাল মোডে এক্সিকিউট হয়।

```js
(function () {
  'use strict';
  console.log('Hello JavaScript');
})();
```
