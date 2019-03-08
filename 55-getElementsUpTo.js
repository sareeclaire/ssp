// Write a function called “getElementsUpTo”.

// Given an array and a index, “getElementsUpTo”, 
// returns an array with all the elements up until, but not including, the element at the given index.

// Notes:
// * In order to do this you should be familiar with the ‘slice’ method.

getElementsUpTo = (arr, index) => arr.slice(0,index)

console.log(getElementsUpTo([1, 3, 5, 7, 9], 4))

