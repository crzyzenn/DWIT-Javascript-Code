// // Variables
// let varName = "Welcome to my site";
// // alert(varName);

// const pi = 3.14156;
// console.log(pi);
// pi = "something else";

// Basics:
// Objects
// Arrays
// Functions

// Objects
// Computer: ram, monitor, keyboard.....

// let myComputer = {
//   cpu: "Ryzen 5 5600x",
//   ram: "16GB 3000mhz",
// };

// myComputer.gpu = "RTX 3090";
// // Both ways are same
// myComputer["ssd"] = "M.2 1 TB";
// // myComputer.ssd = "M.2 1 TB";

// console.log(myComputer);

// Arrays
// Used for storing multiple items

// let colors = ["red", "green", "blue", "orange"];
// colors[4] = "teal";
// console.log(colors);

// Functions
// A block of code that performs a task..

// Accepts 3 numbers and returns their difference
// function subtractThreeNumbers(num1, num2, num3 = 2) {
//   let result = num1 - num2 - num3; // BODMAS rule
//   return result;
// }

// // let output = subtractThreeNumbers(100, 2, 20);
// let diff = subtractThreeNumbers(5, 1, 500);
// console.log(diff);

// If else
// let online = false;

// if (online === true) {
//   console.log("You are online");
// } else if (online === false) {
//   console.log("You are offline");
// } else {
//   // ALways evaluates if none of the conditions are met.
// }

// Switch statement
let role = "staff";

switch (role) {
  case "staff":
    console.log("Staff user");
    break;
  case "admin":
    console.log("admin user");
    // redirect to admin.app.com;
    break;
  case "moderator":
    console.log("moderator user");
    // redirect to moderator site. moderator.app.com
    break;
  default:
    console.log("Unknown user");
}

if (role == "staff") {
  console.log("Staff user");
} else if (role == "admin") {
  console.log("Admin user");
} else if (role == "moderator") {
  console.log("Moderator user");
} else {
  console.log("Unknown user");
}

// Write a function that accepts a number
// and returns if the number is even or odd.

// even or odd
// % modulus
// even / 2 = 0 -> remainder
// odd / 2 = 1 -> odd

// string = "asdfasdf"
// number = 3423.43
// boolean = true / false
// undefined
// null

// function checkEvenOrOdd(num) {
//   // Write your code ....
//   if (typeof num !== "number") {
//     return "Invalid number. Input a Number.";
//   }

//   // Check if even or odd
//   if (num % 2 === 0) {
//     return "Even";
//   } else if (num % 2 === 1) {
//     return "Odd";
//   }
// }

const checkEvenOrOdd = (num) => {
  // Write your code ....
  if (typeof num !== "number") {
    return "Invalid number. Input a Number.";
  }

  // Check if even or odd
  if (num % 2 === 0) {
    return "Even";
  } else if (num % 2 === 1) {
    return "Odd";
  }
};

let result = checkEvenOrOdd(2);
console.log(result); // Odd
