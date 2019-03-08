// Write a function called “getElementsAfter”.

// Given an array and an index, “getElementsAfter” 
// returns a new array with all the elements after (but not including) the given index.


getElementsAfter = (arr, index) => arr.slice(index + 1)

console.log(getElementsAfter([2, 4, 6, 8, 10], 2))