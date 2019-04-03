// Write a function called “getNthElementOfProperty”.

// Given an object and a key, “getNthElementOfProperty” returns the nth element of an array located at the given key.

// Notes:
// * If the array is empty, it should return undefined.
// * If n is out of range, it should return undefined.
// * If the property at the given key is not an array, it should return undefined.
// * If there is no property at the key, it should return undefined.

getNthElementOfProperty = (obj, key, i) => Array.isArray(obj[key]) ? obj[key][i] : undefined


var obj = {
    key:[1,2,3]
};
var output = getNthElementOfProperty(obj, 'key', 1);
console.log(output); // --> 2

// //::input:://::output
// const snacks = {
//     healthy: [],//undefined
//     unhealthy:[1,2,3],//[i] = >3 // undefined//[i] = 1//return 2
//     okay: "gluten free" //undefined
//      //undefined // no property in obj
// }

// //::output::
// console.log(getNthElementOfProperty(snacks,"unhealthy",2))