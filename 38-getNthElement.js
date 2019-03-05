// Write a function called “getNthElement”.

// Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array.

// Notes:
// * If the array has a length of 0, it should return ‘undefined’.


function getNthElement(array,integer) {

   return array[integer]
}

const marbles = [1,3,5,7]
// console.log(marbles[2])

const output = getNthElement(marbles,2)
console.log(output)