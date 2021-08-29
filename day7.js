// FizzBuzz
// A fn that accepts a parameter -> number
// div by 3 -> fizz
// div by 5 -> buzz
// div by 3 and 5 -> fizzbuzz
// not div by 3 or 5 -> return the input
// not a number -> return 'not a number'

function fizzBuzz(num) {
  // Fn definition
  if (typeof num !== "number") {
    return "not a number";
  }

  if (num % 3 === 0 && num % 5 === 0) {
    return "fizzbuzz";
  }
  if (num % 3 === 0) {
    return "fizz";
  }
  if (num % 5 === 0) {
    return "buzz";
  }

  // At this point the num is not divisible by
  // either 3 or 5, so return the number as the output
  return num;
}

// const result = fizzBuzz(15); // fizzbuzz
// const result = fizzBuzz(3); // fizz
// const result = fizzBuzz(5); // buzz
// const result = fizzBuzz(7); // 7
// const result = fizzBuzz(false); // not a number
// console.log(result);

// Math
// console.log(Math.PI);
// console.log(Math.floor(1.2323));
// console.log(Math.round(1.2323));

// let sqrt = Math.floor(Math.sqrt(27));

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }
// console.log(getRandomInt(100));

// Exercise 1:
// Check if a word is a vowel.
// Hint: String.startsWith()
// a, e, i, o, u
// function checkVowel(word) {
//   let formattedWord = word.toLowerCase();
//   if (
//     formattedWord.startsWith("a") ||
//     formattedWord.startsWith("e") ||
//     formattedWord.startsWith("i") ||
//     formattedWord.startsWith("o") ||
//     formattedWord.startsWith("u")
//   ) {
//     return word + " is a vowel";
//   } else {
//     return word + " is not a vowel";
//   }
// }

// // let result = checkVowel("Apple"); // "Apple is a vowel"
// let result = checkVowel("Grape"); // "Grape is not a vowel"
// console.log(result);

// Exercise 2:
// Return the value without floating points
// Hint: Math.floor()
function valueWithoutPoints(num) {
  // write your code
  // return Math.floor(num);
  return +num.toFixed();
}

let result = valueWithoutPoints(1.2323234234); // 1
// let result = valueWithoutPoints(40.2323); // 40
console.log(result);
