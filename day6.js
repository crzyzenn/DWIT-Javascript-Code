// Value types
let x = 1;
let y = x;

y = x + 10;
console.log(x, y);

// Reference types
// let a = {
//   name: "test",
//   age: 20,
// };
// let b = a;

// b.occupation = "Developer";

// Cloning an object
// 1st way:
// let a = {
//   name: "test",
//   age: 20,
// };

// let b = {};

// for (propertyName in a) {
//   // 1st iteration = b["name"] = a["name"] -> test;
//   // 2nd iteration = b["age"] = a["age"] -> 20;
//   b[propertyName] = a[propertyName];
// }

// b.occupation = "Developer";

// console.log(a);
// console.log(b);

// 2nd way
// let a = {
//   name: "test",
//   age: 20,
// };

// let b = Object.assign({}, a);

// b.occupation = "Developer";
// console.log(a);
// console.log(b);

// 3rd way -> ES6
// let a = {
//   name: "test",
//   age: 20,
// };

// let c = {
//   occupation: "Developer",
//   hobbies: ["Singing", "Dancing"],
// };

// // ... -> rest / spread operator
// let b = { ...a, ...c };
// console.log(a);
// console.log(b);

// let a = [1, 2, 3, 4, 5];
// let c = [9, 10, 11, 12];

// let b = [...c, ...a];

// b.push(100);

// console.log(a);
// console.log(b);
