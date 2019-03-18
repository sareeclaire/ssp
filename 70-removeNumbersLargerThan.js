// Write a function called “removeNumbersLargerThan”.

// Given a number and an object, “removeNumbersLargerThan” removes any properties whose values are numbers greater than the given number.

function removeNumbersLargerThan(num, obj) {
    for (let key in obj) {
        if (obj[key] > num) {
            delete obj[key];
        }
    }
    return obj
}

const cake = {
    slices: 6
}

const output = removeNumbersLargerThan(6.2, cake)
console.log(output)