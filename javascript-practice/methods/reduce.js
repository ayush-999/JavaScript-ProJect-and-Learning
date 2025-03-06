let val = [1, 2, 3, 4];

const newVal = val.reduce((prev, cur) => {
  return prev > cur ? prev : cur;
  // return prev + cur;
});

console.log(newVal);

