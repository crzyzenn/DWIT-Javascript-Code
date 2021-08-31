// greet();

// Hoisting

// Function declaration
// function greet() {
//   alert("Hello User");
// }

// Function expression
// const greet = function () {
//   alert("Hello user");
// };

// function sum() {
//   let total = 0;
//   for (item of arguments) {
//     // total = total + item;
//     total += item;
//   }

//   return total;
// }

// function sum(num1, num2, ...args) {
//   console.log(num1, num2, args);
//   const sumOfAllNumbers = args.reduce(function (acc, val) {
//     return acc + val;
//   }, 0);

//   return sumOfAllNumbers;
// }

// function sum(num1, num2, num3) {
//   // || OR operator
//   // && AND operator
//   // ! NOT operator
//   // falsy values = null, undefined ...
//   // other all are truthy
//   num2 = num2 || 5;
//   num3 = num3 || 10;

//   return num1 + num2 + num3;
// }
// function sum(num1, num3, num2 = 50) {
//   // num2 = num2 || 5;
//   // num3 = num3 || 10;
//   console.log(num1, num2, num3);

//   return num1 + num2 + num3;
// }

// const result = sum(1, 30);
// console.log(result);

let user = {
  firstName: "John",
  surName: "Smith",
  get fullName() {
    return this.firstName + " " + this.surName;
  },
  set fullName(name) {
    // const fullname = name.split(" ");
    // this.firstName = fullname[0];
    // this.surName = fullname[1];
    // Array destructuring
    [this.firstName, this.surName] = name.split(" ");
  },
};
console.log(user.fullName);
user.fullName = "Harry Potter";
console.log(user.fullName);

// Exercise:
// Write the implementation of
// Hoisting

// Default parameters
// Write a function to calculate Area of
// circle. make the value of pi default.
// PI, R => PI * R * R
// const area = areaOfCircle(30);
// console.log(area);

// function areaOfCircle(R, PI = 3.1416) {
//   return PI * R * R;
// }
// const areaOfCircle = function (R, PI = 3.1416) {
//   return PI * R * R;
// };
// const area = areaOfCircle(30);

// const person = {
//   name: "Harry Potter",
//   occupation: "Magician",
//   get description() {
//     return "My name is " + this.name + " and I am a " + this.occupation;
//   },
//   set description(value) {
//     [firstName, lastName, this.occupation] = value.split(" ");
//     this.name = firstName + " " + lastName;
//   },
// };

// console.log(person.description);
// person.description = "Elon Musk Scientist";
// console.log(person.description, person);

// person.description = "My name is Harry Potter and I am a Magician";
// person.description = "My name is Mary Jane and I am a Girl";
