// Write a function called “getElementsGreaterThan10AtProperty”.

// Given an object and a key, “getElementsGreaterThan10AtProperty” returns an array containing the elements within the array, located at the given key, that are greater than 10.

// Notes:
// * If the array is empty, it should return an empty array.
// * If the array contains no elements greater than 10, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the key, it should return an empty array.


getElementsGreaterThan10AtProperty = (obj, key) => {
    const array = []
    if (Array.isArray(obj[key])) {
        for (let i = 0; i < obj[key].length; i++) {
            if (obj[key][i] > 10) {
                array.push(obj[key][i])
            }
        }
    }
    return array
}


//::input::
const water = {
    flavors: [20, 19, 8, 7],
    type: 5,
    brands: 35
}

//::output::
console.log(getElementsGreaterThan10AtProperty(water, "flavors"))
//flavors:[20,19]
//type:[]
//brands:[]