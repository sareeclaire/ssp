// Write a function called “isEitherEven”.

// Given two numbers, “isEitherEven” returns whether or not either one of the given numbers is even.


function isEitherEven (num1,num2){
    return num1 % 2 === 0 || num2 % 2 === 0
}

let output = isEitherEven(21,22)
console.log(output)