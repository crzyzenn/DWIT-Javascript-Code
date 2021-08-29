// let a = [1, 2, 3, 4, 5, 6, 100];

// console.log(a.length);

// a = [];
// a.length = 0;
// a.splice(0, a.length);

// while (a.length > 0) {
//   a.pop();
// }

// console.log(a);

// Multiple ways of combining an array
// let b = ["hello", "world", "randomWord"];
// let c = ["bmw", "toyota"];
// // let combinedArray = a.concat(b, c); // 1st way
// let combinedArray = [...a, ...b, ...c];
// console.log(combinedArray);

// let b = a.slice(0, 3);
// console.log(b);
// b[0] = 9000;
// console.log(a);
// console.log(b);

// let a = [1, 2, 3, 4, 5, 6, 100];
// for (item of a) {
//   console.log(item);
// }

// a.forEach(function (value, index) {
//   console.log(value, index);
// });

// let colors = ["red", "green", "blue", "orange", "pink"];

// let joinedString = colors.join(" - ");
// console.log(colors);
// console.log(joinedString);

// let revertedString = joinedString.split(" - ");
// console.log(revertedString);

// Exercise 1
function arrayFromRange(min, max) {
  // Write your code...
  // min = 1, max = 5
  // output = 1,2,3,4,5
  // 1st -> 1 to 5 for loop -> store each value in a new array
  // 2nd -> return joined output -> array.join()
  let newArr = [];
  for (let i = min; i <= max; i++) {
    newArr.push(i);
  }

  return newArr.join();
}

let result = arrayFromRange(1, 5); // 1,2,3,4,5
let result2 = arrayFromRange(500, 1000); // 5,6,7,8,9,10

// Exercise 2
let numbersArr = [1, 2, 3, 1, 1, 5, 10, 11];

function except(exceptNum) {
  // Array.reduce()...
  let newArr = [];
  // [2, 3, 5, 10, 11]
  for (item of numbersArr) {
    // exceptNum = 1
    // item = 1

    // 2
    // exceptNum = 1
    // item = 2

    // 3
    // exceptNum = 1
    // item = 3

    // 4
    // exceptNum = 1
    // item = 1
    if (item !== exceptNum) {
      console.log(item + " has been added");
      newArr.push(item);
    } else {
      console.log(item + " has been excluded");
    }
  }
  return newArr.join();
}

const output = except(1); // 2,3,5,10,11
console.log(output);
