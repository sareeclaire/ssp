// Write a function called “areBothOdd”.

// Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.

areBothOdd = (num1, num2) => num1 % 2 !== 0 && num2 % 2 !== 0

let output = areBothOdd(31,21)
console.log(output)