// Q. We are given array[93, 52, 90, 91, 62, 55, 85, 89] of marks of students. Filter out of the marks of students that scored 90+

let val = [93, 52, 90, 91, 62, 55, 85, 89];

let newVal = val.filter((val) => {
    return val >= 90 
})

console.log(newVal)

