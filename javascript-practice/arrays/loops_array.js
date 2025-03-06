let arr = [1, 3, 4, 55, 6, 8, 99, 100, 565, 5, 9, 0];
let target = 61

arr = arr.sort((a, b) => a - b);

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

for (let num of arr){
    console.log(num)
}