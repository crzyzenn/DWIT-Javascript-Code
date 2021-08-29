// For Loops
// 1 to 100 print
// for loop parameter
// 1. let i = 1; -> initial value
// 2. condition -> if true runs the statement in the block
// 3. iterator -> increments / decrements value after each run in the loop

// i = 1; true; 1
// i = 2; true; 2
// i = 3; true; 3
// ...

// i = 100; true; 100
// i = 101; false; 101
// .....

// for (let i = 0; i < 5; i++) {
//   console.log("Hello World", i);
// }

// While Loops

// 0, true
// 1, true
// 2, true
// ...
// 5, 5 < 5 -> false

// let i = 1;
// while (i < 5) {
//   console.log("Hello World", i);
//   i++;
// }

// Do While loops
// let i = 2;
// do {
//   console.log("Hello World", i);
//   i++;
// } while (i < 5);

// Infinite loops
// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// For in loops
// In objects
// const person = {
//   firstName: "Henry",
//   lastName: "Miller",
//   age: 20,
//   hobby: "Gaming",
//   occupation: "Developer",
// };

// Looping
// firstName
// lastName
// age
// hobby
// occupation
// for (propertyName in person) {
//   console.log(propertyName, person[propertyName]);
// }

// In Arrays
// const colors = ["red", "green", "blue", "orange"];
// for (colorIndex in colors) {
//   console.log(colorIndex, colors[colorIndex]);
// }

// red
// green
// blue
// orange
// for (color of colors) {
//   console.log(color);
// }

// Exercise 1:
// Print out odd numbers between 1 and 10
// using for loop
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 1) {
//     console.log(i);
//   }
// }

// // Exercise 2:
// // Print out the list of object's properties' value
// // 1. for in
// const carObject = {
//   name: "Ford",
//   engine: "v8",
//   color: "Yellow",
//   year: 2021,
// };

// for (propertyName in carObject) {
//   console.log(carObject[propertyName]);
// }

// // Exercise 3:
// // Print out all the items in an array using loop
// // 1. for in
// // 2. for of
// const carsArray = ["Ford", "Lambo", "Toyota", "Volkswagen", "BMW"];

// // 1. for in
// for (index in carsArray) {
//   console.log(index, carsArray[index]);
// }

// // 2. for of
// for (car of carsArray) {
//   console.log(car);
// }

// const fruits = ["banana", "guava", "orange"]; // 2 items
// for (fruitValue of fruits) {
//   console.log(fruitValue);
// }

// Break;
// let i = 0;
// while (i <= 10) {
//   if (i > 5) break;
//   console.log(i);
//   i++;
// }

// Continue
// let i = 0;
// while (i <= 10) {
//   if (i % 2 === 0) {
//     i++;
//     continue; // skip this iteration
//   }

//   console.log(i);
//   i++;
// }

// Objects
const person = {
  firstName: "Henry",
  lastName: "Miller",
  age: 20,
  // Nested object
  address: {
    state: "NY",
    postalCode: "44603",
    city: "Manhattan",
  },
  greet: function () {
    console.log("hello");
    // return 12;
  },
  hobbies: ["Singing", "Coding"],
};

person.firstName = "Diana"; // Update
person.occupation = "Developer"; // Add

// Deleting properties
delete person.occupation;
delete person.firstName;
delete person.lastName;

// console.log(person);

// console.log(person["address"]["postalCode"]);
// console.log(person["address"].postalCode);
// console.log(person.address["postalCode"]);
// console.log(person.address.postalCode);

// console.log(person.greet());
// console.log(person.hobbies);

// Exercise 1:
// A fn that returns the max between two numbers
function max(a, b) {
  // if (a > b) {
  //   return a;
  // } else {
  //   return b;
  // }
  // Ternary operator -> ES6
  return a > b ? a : b; // if a > b then return a else return b
}

let result = max(100, 20000);
console.log(result); // 100

// Exercise 2:
// A fn that accepts a parameter -> number
// Hint: Use "%" to figure out if the num's divisble
// div by 3 -> Fizz
// div by 5 -> fizz buzz
// div by 3 and 5 -> fizzbuzz
// not div by 3 or 5 -> return the input
// not a number -> return 'not a number'
// function fizzbuzz(num) {
// Write your code
// check if not a number -> typeof num -> number

// if(num % 3 === 0 && num % 5 === 0) {
// return 'fizzbuzz'
// }
// else if(...)

// if else if else if else if
// }

// let result = fizzbuzz(9); // Fizz
// let result = fizzbuzz(10); // Buzz
