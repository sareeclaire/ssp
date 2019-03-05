// Write a function called “addArrayProperty”.

// Given an object, a key, and an array, 
// “addArrayProperty” sets a new property on the object at the given key, with its value set to the given array.

function addArrayProperty(object, key, array) {
    object[key] = array
}

let cookies = {
    // sugar: ["white chocolate","snickerdoodle","unicorn"]
}
let array = ["mint", "fudge", "b&w swirl"]

let output = addArrayProperty(cookies, "chocolate", array)
console.log(cookies)
