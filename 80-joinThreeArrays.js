// Write a function called “joinThreeArrays”.

// Given three arrays, “joinThreeArrays” returns an array with the elements of “arr1” in order followed by the elements in “arr2” in order followed by the elements of “arr3” in order.

joinThreeArrays = (a, b, c) => a.concat(b, c)

const d = [1, 2, 3, 4]
const e = [5, 6, 7, 8]
const f = [9, 10, 11, 12]

const output = joinThreeArrays(d, e, f)
console.log(output)