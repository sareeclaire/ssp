// Write a function called “removeFromFront”.

// Given an array, “removeFromFront” returns the given array with its first element removed.

// Notes:
// * You should be familiar with the method ‘shift’.

function removeFromFront(arr){
    arr.shift()
    return arr
}

const odd = [1,3,5,7,9]
const output = removeFromFront(odd)
console.log(output)