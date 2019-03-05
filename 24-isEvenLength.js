// Write a function called “isEvenLength”.

// Given a word, “isEvenLength” returns whether the length of the word is even.

function isEvenLength(word){
    return word.length % 2 === 0
}

let output = isEvenLength("cupcake")
console.log(output)