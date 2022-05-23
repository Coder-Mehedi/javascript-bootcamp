নীচের কোডের আউটপুট কি হবে?

```js


function a() {
  var b = function() {
    return 3;
  };
  return b();
  var b = function() {
    return 8;
  };
}
console.log(a()) // 3

-------------------------
function a() {
  function b() {
    return 3;
  }
  return b();
  function b() {
    return 8;
  }
}
console.log(a()) // 8

```
