let n = 5;

let arr = [];

for (let i = 1; i <= n; i++) {
  arr[i - 1] = i;
}

let factorial = arr.reduce((prev, cur) => {
  return prev * cur;
});

console.log(factorial)