// Write a function called “removeNumberValues”.

// Given an object, “removeNumberValues” removes any properties whose values are numbers.

removeNumberValues = (obj) => {
    for (let key in obj) {
        // if (!isNaN(obj[key])) { 
        if (typeof obj[key] === "number") {
            delete obj[key]
        }
    }
    return obj
}

const grooming = {
    shampoo: 1.1,
    conditioner: "optional",
    scalpTreatment: ["monday", "thursday"]
}

const output = removeNumberValues(grooming)
console.log(output)