// Write a function called “getAllElementsButNth”.

// Given an array and an index, “getAllElementsButNth” returns an array with all the elements but the nth.

getAllElementsButNth = (arr, ind) => {
    arr.splice(ind, 1)
    return arr
}

console.log(getAllElementsButNth([1, 2, 3, 4], 2))  