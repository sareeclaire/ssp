// Write a function called “addToBack”.

// Given an array and an element, “addToBack” returns the given array with the given element added to the end.

// Note: It should be the SAME array, not a new array.


function addToBack(arr,el){
    arr.push(el)
    return arr
}

const sundaeToppings = ["fudge","sprinkles","cookie crumbs"]

const output = addToBack(sundaeToppings,"cherries")
console.log(output)