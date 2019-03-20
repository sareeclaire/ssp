// Write a function called “addToBackNew”.

// Given an array and an element, “addToBackNew” returns a clone of the given array, with the given element added to the end.

// Important: It should be a NEW array instance, not the original array instance.

addToBackOfNew = (arr,ele) => arr.concat([ele])

console.log(addToBackOfNew([1,2,3],4))