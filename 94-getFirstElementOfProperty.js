// Write a function called “getFirstElementOfProperty”.

// Given an object and a key, “getFirstElementOfProperty” returns the first element of the array located at the given key.

// Notes:
// * If the array is empty, it should return undefined.
// * If the property at the given key is not an array, it should return undefined.
// * If there is no property at the key, it should return undefined.

getFirstElementOfProperty = (obj,key) => {
    if(Array.isArray(obj[key])){
        return obj[key][0]
    }
}


//::input::
const soda = {
    flavors: 3,
    brands: "local",
    bottles: [1,2,3,4]
}

//::output::
//(soda,"flavors")//undefined
//(soda,"brands")//undefined
//(soda,"bottles")//1

console.log(getFirstElementOfProperty(soda,'bottles'))