// Write a function called “countCharacter”.

// Given a string input and a character, “countCharacter” returns the number of occurences of a given character in the given string.

function countCharacter(str, char) {
    // return str.split(char).length
    str = str.toLowerCase()
    console.log(str.split(char).length-1)
   
    str = str.toLowerCase()
    let num = 0
    for (let i = 0; i < str.length; i++) {     
        if (str[i] === char) {
            num++
        }
    }
    return num
}

const output = countCharacter("I wish I was going to Hawaii", "i")
console.log(output)