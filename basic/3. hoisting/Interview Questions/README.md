Study the code below and What will be the output of the following code?

```js
function add() {
  console.log(answer);
  var answer = 2;
}
add();
```

Output:

> **undefined**

Study the code below and What will be the output of the code?

```js
var temp = 'hi';
function display() {
  console.log(temp);
  var temp = 'bye';
}
display();
```

Output:

> **undefined**

Study the code below and What will be the output of the code?

```js
function codeHoist() {
  a = 10;
  let b = 50;
}
codeHoist();

console.log(a);
console.log(b);
```

Output:

> **10** > **Uncaught ReferenceError: b is not defined**

Study the code below and What will be the output of the code?

```js
var x = 5;
console.log(x + ' ' + y);
var y = 7;
console.log(x + ' ' + y);
```

Output:

> **5 undefined**
> **5 7**

Study the code below and What will be the output of the code?

```js
var x = 10;
console.log(x);

function test() {
  var x = 20;
  console.log(x);

  if (x > 10) {
    let x = 30;
    console.log(x);
  }

  console.log(x);
}

test();
console.log(x);
```

Output:

> **10**
> **20**
> **30**
> **20**
> **10**
