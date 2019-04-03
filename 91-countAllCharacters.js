// Write a function called “countAllCharacters”.

// Given a string, “countAllCharacters” returns an object where each key is a character in the given string. 
// The value of each key should be how many times each character appeared in the given string.

// Notes:
// * If given an empty string, countAllCharacters should return an empty object.

countAllCharacters = (str) => {
    const obj = {}
    for (let i = 0; i < str.length; i++) {
        // obj[str[i]] = 
        if (!obj.hasOwnProperty(str[i])) {
            obj[str[i]] = 1
        }else{ obj[str[i]]++
        }
    }
    return obj
}

//::input::
console.log(countAllCharacters("flammable"))

// The value of each key should be how many times each character appeared in the given string.
//:: output::
// return obj = {
//     f: 1,
//     l: 2,
//     a: 2,
//     m: 2,
//     b: 1,
//     e: 1
// }
