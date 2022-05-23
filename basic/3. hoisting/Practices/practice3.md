নীচের কোডের আউটপুট কি হবে?

```js
var test = 1;
function functionHoisting() {
  test = 10;
  return;
  function test() {}
}
functionHoisting();
console.log(test);
```

Output: 1
