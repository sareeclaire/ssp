// Write a function called “countWords”.

// Given a string, “countWords” returns an object where each key is a word in the given string, with its value being how many times that word appeared in the given string.

// Notes:
// * If given an empty string, it should return an empty object.

//input: string "I love chocolate. Chocolate strawberries, chocolate ice cream, and pretty much chocolate anything."
//output: object, the value is the # of times the word appears in a string.
// ex:)object = {
//     chocolate: 4
// }

function countWords(str) {

    const obj = {}
    str = str.toLowerCase()
    let arr = str.split(" ")
    for (let i = 0; i < arr.length; i++) {
        if (obj.hasOwnProperty(arr[i])) {
            obj[arr[i]]++
        } else {
            obj[arr[i]] = 1
        }

    }
    return obj

}

const output = countWords("I love Sweets Chocolate strawberries chocolate ice cream chocolate anything")
console.log(output)
