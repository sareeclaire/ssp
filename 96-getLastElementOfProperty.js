// Write a function called “getLastElementOfProperty”.

// Given an object and a key, “getLastElementOfProperty” returns the last element of an array located at the given key.

// Notes:
// * If the array is empty, it should return undefined.
// * if the property at the given key is not an array, it should return undefined.
// * If there is no property at the key, it should return undefined.


// getLastElementOfProperty = (obj, key) => Array.isArray(obj[key]) ? obj[key][obj[key].length - 1]: undefined


getLastElementOfProperty = (obj,key) => {
    let array = obj[key]
    let n = array.length - 1
    if(Array.isArray(array)){
        return array[n]
    }
}

//input::
const dinner = {
    chicken: [],//undefined
    beef: [2, 3, 4],//4
    pork: "shredded"//undefined
    //undefined
}

//output::
console.log(getLastElementOfProperty(dinner, "beef"))