// Write a function called “getAllLetters”.

// Given a word, “getAllLetters” returns an array containing every character in the word.

// Notes:
// * If given an empty string, it should return an empty array.

function getAllLetters(word) {
    return word.split("")
}

const output = getAllLetters("tacos")
console.log(output)