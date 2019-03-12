// Write a function called “removeFromFrontOfNew”.

// Given an array, “removeFromFrontOfNew” returns a new array containing all but the first element of the given array.


function removeFromFrontOfNew(arr){
    return arr.slice(1)
}

const odd = [1,3,5,7,9]
const output = removeFromFrontOfNew(odd)
console.log(output)