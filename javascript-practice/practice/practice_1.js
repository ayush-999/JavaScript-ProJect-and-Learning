// Q. For given array with marks of student [85, 97, 44, 37, 76, 60]. find thr average marks of the entire class

let marks = [85, 97, 44, 37, 76, 60];

let sum = 0;

for (let num of marks) {
  sum += num;
}

let average = sum/marks.length

console.log(`Average marks of the class = ${average}`);
