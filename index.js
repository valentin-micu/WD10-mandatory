// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
// task 1
function concatenateArrays(...arrays) {
  return arrays.reduce((result, array) => {
    return result.concat(Object.entries(array));
  }, []);
}
const arr1 = { a: 1, b: 2 };
const arr2 = { shrimp: 15, tots: 12 };
const arr3 = {};

console.log(concatenateArrays(arr1, arr2)); // [["a", 1], ["b", 2], ["shrimp", 15], ["tots", 12]]
console.log(concatenateArrays(arr3)); // []

// task 2
function sumNumbersInArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] == 'number') {
      sum += arr[i];
    }
  }
  return sum;
}

const arr21 = [1, 2, "13", "4", "645"];
const arr22 = [true, false, "123", "75"];
const arr23 = [1, 2, 3, 4, 5, true];

console.log(sumNumbersInArray(arr21)); // 3
console.log(sumNumbersInArray(arr22)); // 0
console.log(sumNumbersInArray(arr23)); // 15

// task 3
function toHackerSpeak(str) {
  const replacements = {
    a: "4",
    e: "3",
    i: "1",
    o: "0",
    s: "5"
  };
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const replacement = replacements[char.toLowerCase()] || char;
    result += replacement;
  }
  return result;
}

console.log(toHackerSpeak("javascript is cool")); // "j4v45cr1pt 15 c00l"
console.log(toHackerSpeak("programming is fun")); // "pr0gr4mm1ng 15 fun"
console.log(toHackerSpeak("become a coder")); // "b3c0m3 4 c0d3r"

