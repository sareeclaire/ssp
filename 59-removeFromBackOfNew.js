// Write a function called “removeFromBackOfNew”.

// Given an array, “removeFromBackOfNew” returns a new array containing all but the last element of the given array.

// Notes:
// * You should be familiar with the ‘slice’ method.

function removeFromBackOfNew(arr) {
    return arr.slice(0, arr.length - 1)
    
}


const even = [2, 4, 6, 8, 10]
const output = removeFromBackOfNew(even)
console.log(output)