// Write a function called “addToFront”.

// Given an array and an element, “addToFront” adds the given element to the front of the given array, and returns the given array.

// Notes: 
// * It should be the SAME array, not a new array.


function addToFront(array,element){
    array.unshift(element)
    return array
}

const array = [1,2,3]

const output = addToFront(array,3)
console.log(output)