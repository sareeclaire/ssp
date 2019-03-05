// Write a function called “getLastElement”.

// Given an array, “getLastElement” returns the last element of the given array.

// Notes:
// * If the given array has a length of 0, it should return ‘undefined’.


function getLastElement(array){
    return array[array.length-1]
    // return array.pop()
}

const cars = ['subaru','toyota','tesla']

const output = getLastElement(cars)
console.log(output)