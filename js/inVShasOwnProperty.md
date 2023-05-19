```js

const myObj = {
  prop1: "value1",
  prop2: "value2"
};

console.log("prop1" in myObj); // true
console.log("toString" in myObj); // true

---

const myObj = {
  prop1: "value1",
  prop2: "value2"
};

// using hasOwnProperty on myObj
console.log(myObj.hasOwnProperty("prop1")); // true
console.log(myObj.hasOwnProperty("toString")); // false

```