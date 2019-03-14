// Write a function called “removeFromBack”.

// Given an array, “removeFromBack” returns the given array with its last element removed.

// Notes:
// * You should be familiar with the method ‘pop’.

function removeFromBack(arr) {
    arr.pop()
    return arr
}

const output = removeFromBack([1, 2, 3, 4, 5, 6])
console.log(output)