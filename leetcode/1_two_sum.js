function twoSum(nums, target) {
  let map = new Map();

  // Using for...of to loop through the array
  for (let [index, num] of nums.entries()) {
    let complement = target - num;

    // Check if the complement is already in the map
    if (map.has(complement)) return [map.get(complement), index];

    // Store the current number and its index in the map
    map.set(num, index);
  }

  // Return an empty array if no solution is found (though the problem guarantees one)
  return [];
}

let arr = [2, 7, 11, 15];
let target = 9;

console.log(twoSum(arr, target));
