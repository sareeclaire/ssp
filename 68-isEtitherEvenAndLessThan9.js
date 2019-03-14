// Write a function called “isEitherEvenAndLessThan9”.

// Given two numbers, ‘isEitherEvenAndLessThan9’ returns whether at least one of them is even, and, both of them are less than 9.


function isEitherEvenAndLessThan9(n1, n2) {
    if ((n1 < 9 && n2 < 9) && (n1 % 2 === 0 || n2 % 2 === 0)) {
        return true;
    }
    return false
    // return (n1 % 2 === 0 || n2 % 2 === 0) && (n1 < 9 && n2 < 9)
}

const output = isEitherEvenAndLessThan9(4, 6)
console.log(output)