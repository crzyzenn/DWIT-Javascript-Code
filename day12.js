// let num = 12;
// try {
//   let uppercaseNum = num.toUpperCase();
//   console.log(uppercaseNum);
// } catch (err) {
//   console.log(err);
// } finally {
//   console.log("hello world");
// }

// console.log("this is my rest of the code...");
// const color = "red";

// function start() {
//   const message = "hi";
//   const color = "blue";

//   if (true) {
//     const another = "hello";
//     console.log(color);
//   }
//   console.log(message);
// }
// console.log(start());

// DEPRECATED!!!
// var variable = "seomthing"

// if (true) {
//   let myVariable = "Hello World";
//   // let myVariable = "Something else";
//   // myVariable = "Something different";
//   console.log(myVariable);
// }

// console.log(myVariable);

let user = {
  name: "John",
  age: 30,
};

let admin = {
  name: "Admin",
  age: 25,
};

function sayHi() {
  return this.age;
}

user.sayHi = sayHi;
admin.sayHi = sayHi;

// console.log(user.sayHi(), admin.sayHi());

// Exercises:
// 1. Write a JavaScript function that reverse a number. -> 1234 -> 4321
// 2. Write a JavaScript function that checks whether a passed string is palindrome
// or not? -> eye -> "eye" is a palindrome
// 3. Write a JavaScript function that accepts a string as a parameter
// and converts the first letter of each word of the string in upper
// case. -> "hello world" -> "Hello World"

function reverseNum(num) {
  const reversedNum = num.toString().split("").reverse().join("");
  return +reversedNum;
}

const reversedNumber = reverseNum(87654);

function isPalindrome(word) {
  const reversedWord = word.split("").reverse().join("");
  if (word === reversedWord) {
    return word + " is palindrome";
  } else {
    return word + " is not a palindrome";
  }
}

const check = isPalindrome("eye");
// console.log(check);

function capitalize(sentence) {
  const sentenceArr = sentence.split(" ");
  const capitalizedSentence = sentenceArr.reduce(function (acc, val) {
    const capitalWord = val.charAt(0).toUpperCase() + val.slice(1);
    return [...acc, capitalWord];
  }, []);

  return capitalizedSentence.join(" ");
}

const capitalizedSentence = capitalize("hello world this is my new world.");
console.log(capitalizedSentence);
