// Write a function called “isOddLength”.

// Given a word, “isOddLength” returns whether the length of the given word is odd.


function isOddLength(word){
    return word.length % 2 !== 0
}

let output = isOddLength("cupcake")
console.log(output)