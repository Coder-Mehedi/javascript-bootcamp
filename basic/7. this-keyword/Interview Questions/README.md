#### Question 1:

What logs to console the following code snippet:

```js
const object = {
  message: 'Hello, World!',
  getMessage() {
    const message = 'Hello, Earth!';
    return this.message;
  },
};
console.log(object.getMessage());
```

Output:

> **Hello, World!**

#### Question 2:

What logs to console the following code snippet:

```js
function Pet(name) {
  this.name = name;
  this.getName = () => this.name;
}
const cat = new Pet('Fluffy');
console.log(cat.getName()); // What is logged?
const { getName } = cat;
console.log(getName()); // What is logged?
```

Output:

> **Fluffy <br> Fluffy**

#### Question 3: Tricky length

What logs to console the following code snippet:

```js
var length = 4;
function callback() {
  console.log(this.length); // What is logged?
}
const object = {
  length: 5,
  method(callback) {
    callback();
  },
};
object.method(callback, 1, 2);
```

Output:

> **4**
