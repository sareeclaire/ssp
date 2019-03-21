// Write a function called “findMaxLengthOfThreeWords”.

// Given 3 words, “findMaxLengthOfThreeWords” returns the length of the longest word.


findMaxLengthOfThreeWords = (w1, w2, w3) => Math.max(w1.length, w2.length, w3.length)

console.log(findMaxLengthOfThreeWords('miracle', 'magic', 'poof'))