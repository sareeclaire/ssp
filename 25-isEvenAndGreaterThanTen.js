// Write a function called “isEvenAndGreaterThanTen”.

// Given a number, “isEvenAndGreaterThanTen” returns whether it is both even and greater than 10.

function isEvenAndGreaterThanTen(num) {
    return num % 2 === 0 && num > 10
}

let output = isEvenAndGreaterThanTen(8)
console.log(output)