// Write a function called “removeEvenValues”.

// Given an object, “removeEvenValues” removes any properties whose values are even numbers.

// Do this in place and return the original object, do not construct a cloned object that omits the properties.

// function removeEvenValues(obj) {
//     for (let key in obj) {
//         if (obj[key] % 2 === 0) {
//             delete obj[key]
//         }
//     }
//     return obj
// }

removeEvenValues = (obj) => {
    for (let key in obj) {
        obj[key] % 2 === 0 ? delete obj[key] : " "     
    }
    return obj
}


const chocolate = {
    pieces: 4,
    bars: 1
}

const output = removeEvenValues(chocolate)
console.log(output)