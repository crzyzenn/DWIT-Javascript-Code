// Objects, Arrays and Functions
const functionName = () => {
  // What to do????
};
// Undefined
// let testVariable;
// console.log(testVariable);

// testVariable = null;
// console.log(testVariable);

// Objects
// Object's property are stored in key:value pair
let person = {
  name: "Henry",
  age: 60,
  occupation: "Developer",
  // You can add more here....
};

// console.log(person.age);
// console.log(person["age"]);

// // ??
// // console.log(person);
// person.dob = 1997;
// person["hobby"] = "Coding";
// console.log(person);

// Arrays:
let cars = ["BMW", "Volvo", "Mercedes", "SABB"];
//            0       1         2           3
cars[4] = "Volkswagen";

cars[0] = "Toyota"; // Existing element gets replaced by the new one

console.log(cars);

// let listOfPersons = [
//   {
//     name: "Henry",
//     age: 60,
//     occupation: "Developer",
//     // You can add more here....
//   },
//   {
//     name: "Messi",
//     age: 20,
//     occupation: "Footballer",
//     // You can add more here....
//   },
// ];

// console.log(listOfPersons[1].name);

// Functions:
// Function definition
// Declare the function
// function sumOfTwoNumbers() {
//   let sum = 4 + 5;
//   return sum;
// }

// // Execute the function
// // Store the returned output.
// let mySum = sumOfTwoNumbers();
// console.log(mySum);

// greet();

// Exercise:
// Create 2 functions that prints
// 1. Object (fn name, printObject)
// 2. Array (fn name, printArray)

// Example syntax:
// function greet() {
//   console.log("Welcome to my website!");
// }

// 1.
// Traditional way of declaring functions
function printObject() {
  let person = {
    name: "Henry",
    age: 20,
  };
  console.log(person);
}

// New way - ES6 -> Arrow functions
// const printObject = () => {
//   let person = {
//     name: "Henry",
//     age: 20,
//   };
//   console.log(person);
// };

function printArray() {
  let colors = ["Red", "Green", "Blue"];
  console.log(colors);
}

// let colors = ["Red", "Green", "Blue"];
// console.log(colors);

printObject();
printArray();
