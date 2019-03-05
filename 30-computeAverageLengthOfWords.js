// Write a function called “computeAverageLengthOfWords”.

// Given two words, “computeAverageLengthOfWords” returns the average of their lengths.

// function computeAverageLengthOfWords (word1,word2){
//     return (word1.length + word2.length) / 2
// }


computeAverageLengthOfWords = (word1,word2) => (word1.length + word2.length) / 2

let output = computeAverageLengthOfWords("cake", "pizza")
console.log(output)