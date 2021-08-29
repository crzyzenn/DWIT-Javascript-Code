// // // Sorting

// let a = [3, 1, 2, 20, 50, 100, 10];
// console.log(a.sort());
// // console.log(a.reverse());

// // // Js built in sort converts the elements
// // // into string and then compares them

// // // So we use a different alogrithm...

// function comparison(a, b) {
//   // if (a > b) {
//   //   return 1;
//   // } else if (b > a) {
//   //   return -1;
//   // } else {
//   //   return 0;
//   // }
//   return b - a; // Either -ve | +ve | 0
// }

// console.log(a.sort(comparison));

// Sorting reference types in array
// Sorting out courses by name
// let courses = [
//   {
//     id: 1,
//     name: "Node.js", // N - 78 and n - 100 are different ->
//   },
//   {
//     id: 2,
//     name: "javaScript",
//   },
// ];

// function comparison(a, b) {
//   const lowerCaseA = a.name.toLowerCase();
//   const lowerCaseB = b.name.toLowerCase();

//   if (lowerCaseA < lowerCaseB) return 1;
//   else if (lowerCaseA > lowerCaseB) return -1;
//   else return 0;
// }

// console.log(courses.sort(comparison));

// Testing arrays
// Every and Some
// let a = [10, 50, 100, -10000];

// // [true, true, true, false]
// // Result -> false
// let everyResult = a.every(function (value) {
//   // Every element in the array should
//   // pass this condition...i.e. value should be
//   // greater than or equal to 0.
//   return value >= 0;
// });

// // [true, true, true, false]
// // Result -> true
// let someResult = a.some(function (value) {
//   // Every element in the array should
//   // pass this condition...i.e. value should be
//   // greater than or equal to 0.
//   return value >= 0;
// });

// console.log(everyResult);
// console.log(someResult);

// Filter
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 500, 501, 556, 2001];

// Working process:
// []
// [1]
// 2 -> false | [1]
// [1, 3]
// 4 -> false | [1, 3]
// [1, 3, 5]
// ...
// [1, 3, 5, 7, 9, 501, 2001]

// let oddNumbers = a.filter(function (number) {
//   // true | false
//   return number % 2 !== 0;
// });

// console.log(oddNumbers);

// //
// let businesses = [
//   {
//     id: 1,
//     name: "Mc Donalds",
//     open: true,
//   },
//   {
//     id: 2,
//     name: "KFC",
//     open: false,
//   },
//   {
//     id: 3,
//     name: "Dominos",
//     open: true,
//   },
// ];

// let openedBusinesses = businesses.filter(function (value) {
//   return !value.open;
// });

// console.log(openedBusinesses);

// Mapping
const numbers = [1, -1, 2, 3];

function filterFunction(value) {
  return value >= 0;
}

const filteredNumbers = numbers.filter(filterFunction);

console.log(filteredNumbers);
// // const filteredNumbers = numbers.filter((value) => value >= 0);
// // console.log(filteredNumbers);

// // Mapping [1,2,3]
// // []
// // [-9]
// // [-9, -8]
// // [-9, -8, -7]
// const mappedArray = filteredNumbers.map(function (value) {
//   return value * value;
// });

// // // console.log(filteredNumbers);
// // console.log(filteredNumbers, mappedArray);

// // // [1,2,3]
// // // const multipliedArray = [];
// // // for (item of filteredNumbers) {
// // //   multipliedArray.push(item * 3);
// // // }
// // // console.log(multipliedArray);

// // // console.log(filteredNumbers.map((num) => num * 3));
// // // console.log(
// // //   filteredNumbers.map(function (num) {
// // //     return num * 3;
// // //   })
// // // );

// // Reduce...
// let shoppingCart = [
//   {
//     id: 1,
//     productName: "Egg",
//     quantity: 10,
//     price: 20,
//   },
//   {
//     id: 1,
//     productName: "Orange",
//     quantity: 2,
//     price: 30,
//   },
//   {
//     id: 1,
//     productName: "Mango",
//     quantity: 1,
//     price: 50,
//   },
// ];

// // acc = 0 | item.price = 20 | 0 + 20 = 20
// // acc = 20 | item.price = 30 | 20 + 30 = 50
// // acc = 50 | item.price = 50 | 50 + 50 = 100
// // Reduce -> array.reduce(fn, defaultValue)
// // const totalPrice = shoppingCart.reduce(function (acc, item) {
// //   return acc + item.price;
// // }, 0);

// // console.log(shoppingCart, totalPrice);

// let numbersArray = [5, 10, 15, 20, 25, 100];

// let sumOfOddNumbers = numbersArray.reduce(function (prevValue, num) {
//   if (num % 2 !== 0) {
//     return prevValue + num;
//   } else {
//     return prevValue;
//   }
// }, 0);
// // let sumOfOddNumbers = numbersArray.reduce((prevValue, num) => {
// //   if (num % 2 !== 0) {
// //     return prevValue + num;
// //   } else {
// //     return prevValue;
// //   }
// // }, 0);
// // let sumOfOddNumbers = numbersArray.reduce(
// //   (prevValue, num) => (num % 2 !== 0 ? prevValue + num : prevValue),
// //   0
// // );

// console.log(sumOfOddNumbers);

// // accumulator
// // prevValue = 0 | num = 5 | 0 + 5 = 5 -> prevValue = 5
// // prevValue = 5 | num = 10 | 5 + 10 = 15 -> prevValue = 15
// // prevValue = 15 | num = 15 | 15 + 15 = 30 -> prevValue = 30
// // prevValue = 30 | num = 20 | 30 + 20 = 50 -> prevValue = 50
// // ...
// // ...
// // const sumOfAllNumbers = numbersArray.reduce(function (prevValue, num) {
// //   return prevValue + num;
// // }, 0);

// // let prevValue = 10

// // console.log(sumOfAllNumbers);

// // let numbersArr = [1, 2, 3, 1, 1, 5, 10, 11];

// // function except(exceptNum) {
// //   // acc = [] -> val = 1 -> exceptNum = 1 -> []
// //   // acc = [] -> val = 2 -> exceptNum = 1 -> [2]
// //   // acc = [2] -> val = 3 -> exceptNum = 1 -> [2, 3]
// //   // acc = [2, 3] -> val = 1 -> exceptNum = 1 -> [2, 3]
// //   // acc = [2, 3] -> val = 1 -> exceptNum = 1 -> [2, 3]
// //   // acc = [2, 3] -> val = 5 -> exceptNum = 1 -> [2, 3, 5]
// //   // acc = [2, 3] -> val = 5 -> exceptNum = 1 -> [2, 3, 5, 10, 11]
// //   const result = numbersArr.reduce(function (acc, val) {
// //     if (val !== exceptNum) {
// //       return [...acc, val];
// //     }
// //     return acc;
// //   }, []);
// //   return result.join();
// // }

// // console.log(except(1));
