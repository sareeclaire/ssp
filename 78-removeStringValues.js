// Write a function called “removeStringValues”.

// Given an object, “removeStringValues” removes any properties on the given object whose values are strings.

removeStringValues = (obj) => {
    for (let key in obj) {
        if (typeof obj[key] === "string") {
            delete obj[key]
        }
    }
    return obj
}

const dessert = {
    type: "cake",
    slices: 4,
    shared: 0
}

const output = removeStringValues(dessert)
console.log(output)