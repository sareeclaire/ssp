// Write a function called “getAllElementsButLast”.

// Given an array, “getAllElementsButLast” returns an array with all the elements but the last.


function getAllElementsButLast(arr) {
    // return arr.slice(0, arr.length - 1)
    arr.pop()
    return arr
}

const even = [2, 4, 6, 8, 10]
const output = getAllElementsButLast(even)
console.log(output)