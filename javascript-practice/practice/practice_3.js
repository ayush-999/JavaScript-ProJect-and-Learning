// Q. Take a number n as a input from user. create an array of numbers from 1 to n. Use the reduce method to calculate sum of all numbers in array. Use reduce method to calculate product of all numbers in the array

// let n = prompt("Enter number: ")
let n = 5;

let arr = [];

for (let i = 1; i <= n; i++) {
  arr[i - 1] = i;
}

let sum = arr.reduce((prev, cur) => {
  return prev + cur;
});

console.log(arr);
console.log(sum);
