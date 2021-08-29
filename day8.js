// let colors = ["red", "green", "blue"];
// colors.push("orange", "teal");
// // unshift
// colors.unshift(1, 2, 4, 5);

// console.log(colors);

// for of
// for (color of colors) {
//   console.log(color);
// }

// 0 - 4
// colors[0] -> "red"
// colors[1] -> "green"
// colors[2] -> "blue"
// ....
// colors[4] -> "teal"
// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

// splice
// const numbers = [3, 4];
// numbers.push(5, 6);
// numbers.unshift(1, 2);
// // console.log(numbers);
// // // Add 1000 and 5000 from 3rd position / 2nd index
// numbers.splice(2, 0, 1000, 5000);
// console.log(numbers);

// // Remove 3 numbers from 3rd position / 2nd index
// numbers.splice(2, 3);

// numbers.push(5000);
// console.log(numbers);

// Finding elements inside of an array
// If we want to know if the element
// exists in the array + the position of
// that element in the array.
// let position = numbers.lastIndexOf(5000);
// let position = numbers.indexOf(5000);
// console.log(position);

// If we just want to know if the element
// exists in the array
// console.log(numbers.includes(5000));

// 2nd way
// Array.findIndex
// let ages = [10, 15, 20, 25, 30, 35, 40, 80];

// let result = ages.findIndex(function (age) {
//   // 10 -> false
//   // 15 -> false
//   // 20 -> false
//   // 25 -> true
//   return age >= 25;
// });

// console.log(result);

// course
// id, level, subjects, chapters...

let courses = [
  {
    id: 1,
    level: "Grade 11",
    subjects: 10,
  },
  {
    id: 2,
    level: "Grade 12",
    subjects: 30,
  },
];

// let indexResult = courses.findIndex(function (course) {
//   return course.id === 2;
// });

// console.log(indexResult);

// let valueResult = courses.find(function (course) {
//   return course.id === 2;
// });
// console.log(valueResult);

// let fnName = () => {}
// function fnName() {...}
// let result = courses.findIndex((course) => {
//   return course.level === "Grade 12";
// });

// Implicit return -> arrow function feature..
// let result = courses.findIndex((course) => course.level === "Grade 12");

// Explicit return
// let result = courses.findIndex((course) => {
//   return course.level === "Grade 12";
// });

// console.log(result);
// console.log(courses[result]);

// Most popular
// array.map
// array.filter
// array.reduce

// Exercise 1:
let array = [5, 10, 30, 50, 20];
// Make use of:
// indexOf
// console.log(array.indexOf(50));
// includes
// console.log(array.includes(5));

// let cars = [
//   {
//     id: 1,
//     brand: "BMW",
//     year: 2020,
//   },
//   {
//     id: 2,
//     brand: "Mercedes",
//     year: 2021,
//   },
// ];
// Make use of:
// findIndex
// console.log(
//   cars.findIndex(function (car, index) {
//     return car.year === 2021;
//   })
// );

// find
// console.log(
//   cars.find(function (car, index) {
//     return car.year === 2021 && car.brand === "Mercedes";
//   })
// );
