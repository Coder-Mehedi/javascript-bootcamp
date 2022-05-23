#### Question 1:

What is the output?

```js
var myObject = {
  price: 20.99,
  get_price: function () {
    return this.price;
  },
};
var customObject = Object.create(myObject);
customObject.price = 19.99;
delete customObject.price;
console.log(customObject.get_price());
```

Output:

> **20.99**

#### Question 2:

What is the output?

```js
(function (a) {
  arguments[0] = 10;
  return a;
})(5);
```

Output:

> **10**

#### Question 3:

What is the output?

```js
function Car(color) {
  this.color = color;
}
var lada = new Car('Black');
Car.prototype.currentGear = 1;
console.log(++lada.currentGear);
console.log(Car.prototype.currentGear);
```

Output:

> **2 <br> 1**

#### Question 4:

What is the output?

```js
var User = function () {};

User.prototype.attributes = {
  isAdmin: false,
};

var admin = new User('Sam'),
  guest = new User('Bob');

admin.attributes.isAdmin = true;

console.log(admin.attributes.isAdmin);
console.log(guest.attributes.isAdmin);
```

Output:

> **true <br> true**
