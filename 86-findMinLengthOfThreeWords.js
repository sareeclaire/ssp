// Write a function called “findMinLengthOfThreeWords”.

// Given 3 words, “findMinLengthOfThreeWords” returns the length of the shortest word.

findMinLengthOfThreeWords = (w1,w2,w3) => Math.min(w1.length,w2.length,w3.length)

console.log(findMinLengthOfThreeWords("kitten","puppy","tree"))