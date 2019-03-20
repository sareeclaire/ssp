// Write a function called “addToFrontOfNew”.

// Given an array and an element, “addToFrontOfNew” returns a new array containing all the elements of the given array, with the given element added to the front.

// Important: It should be a NEW array instance, not the original array instance.

// addToFrontOfNew = (arr, ele) => {
//     const newarr = []
//     // arr.unshift(ele)
//     for (let i = 0; i < arr.length; i++) {
//         newarr.push(arr[i])
//     }
//     newarr.unshift(ele)
//     return newarr
// }

// addToFrontOfNew = (arr, ele) => {
//     const newarr = [];
//     newarr.push(ele)
//     return newarr.concat(arr)
// }

addToFrontOfNew = (arr, ele) => [ele].concat(arr)

const nums = [1, 2, 3]
const output = addToFrontOfNew(nums, 0)
console.log("SAME ARRAY?", nums === output)
console.log(output)


