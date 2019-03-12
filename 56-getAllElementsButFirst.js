// Write a function called “getAllElementsButFirst”.

// Given an array, “getAllElementsButFirst” returns an array with all the elements but the first.

function getAllElementsButFirst(arr){
    return arr.slice(1);
}

const food = ["corn","green beans","tomatoes","lettuce"]
const output = getAllElementsButFirst(food)
console.log(output)