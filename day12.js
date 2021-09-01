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

// let user = {
//   name: "John",
//   age: 30,
// };

// let admin = {
//   name: "Admin",
//   age: 25,
// };

// function sayHi() {
//   return this.name;
// }

// user.sayHi = sayHi;
// admin.sayHi = sayHi;

// console.log(user.sayHi(), admin.sayHi());

// Exercises:
// 1. Write a JavaScript function that reverse a number. -> 1234 -> 4321
// 2. Write a JavaScript function that checks whether a passed string is palindrome
// or not? -> eye -> "eye" is a palindrome
// 3. Write a JavaScript function that accepts a string as a parameter
// and converts the first letter of each word of the string in upper
// case. -> "hello world" -> "Hello World"

// function reverseNum(num) {
//   const reversedNum = num.toString().split("").reverse().join("");
//   return +reversedNum;
// }

// const reversedNumber = reverseNum(87654);

// function isPalindrome(word) {
//   const reversedWord = word.split("").reverse().join("");
//   if (word === reversedWord) {
//     return word + " is palindrome";
//   } else {
//     return word + " is not a palindrome";
//   }
// }

// const check = isPalindrome("eye");
// // console.log(check);

// function capitalize(sentence) {
//   const sentenceArr = sentence.split(" ");
//   console.log(sentenceArr);
//   const capitalizedSentence = sentenceArr.reduce(function (words, val) {
//     // console.log(acc, val);
//     // val = hello
//     // val = world
//     // val = this
//     const capitalWord = val.charAt(0).toUpperCase() + val.slice(1);
//     // Hello
//     // World
//     // This

//     // acc = []
//     // acc = ['Hello']
//     // acc = ['Hello', 'World']
//     // acc = ['Hello', 'World', 'This']
//     console.log(words, capitalWord);
//     return [...words, capitalWord];
//   }, []);

//   return capitalizedSentence.join(" ");
// }

// const capitalizedSentence = capitalize("hello world this is my new world.");
// console.log(capitalizedSentence);

// this in a callback function
// let video1 = {
//   title: "Video 1",
//   tags: ["a", "b", "c"],
//   showTags: showTags,
// };

// let video2 = {
//   title: "Video 2",
//   tags: ["d", "e", "f"],
//   showTags: showTags,
// };

// function showTags() {
//   let myObj = this;
//   // 1st callback fn, value of this...
//   // this.tags.forEach(function (tag) {
//   //   console.log(myObj.title);
//   // });
//   this.tags.forEach((tag) => {
//     console.log(this.title);
//   });
// }

// console.log(video1.showTags(), video2.showTags());

// 4. Write a JavaScript function that accept a list of country names as input
// and returns the longest country name as output.
// ["Afghanistan", "Nepal", "United States", ...]

// function longestCountry(countryNames) {
//   let longest = countryNames[0];
//   for (country of countryNames) {
//     if (country.length > longest.length) {
//       longest = country;
//     }
//   }
//   return longest;
// }

// console.log(
//   longestCountry(["Afghanistan", "Nepal", "United States", "Bhutan", "Sweden"])
// );

// 5. Write a JavaScript program that accept two integers and displays
// the larger number.
// fn(20, 12) -> 20
function largestNum(a, b) {
  return a > b ? a : b;
  // if(a > b) {
  //   return a
  // } else {
  //   return b
  // }
}

// console.log(largestNum(100, 2000));

// 6. Write a JavaScript conditional statement to sort three numbers. Display an
// alert box to show the result.
//	Sample numbers : 0, -1, 4
//	Output : 4, 0, -1
let numbersToSort = [0, -1, 4];
// console.log(
//   numbersToSort.sort(function (a, b) {
//     // return a - b; // -> Ascending
//     return b - a; // -> Descending
//   })
// );

// 7. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
// 	Sample Output :
// 	"0 is even"
// 	"1 is odd"
// 	"2 is even"
// 	----------
// 	----------

for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    // console.log(i + " is even");
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}
