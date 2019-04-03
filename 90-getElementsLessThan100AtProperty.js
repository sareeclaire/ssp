// Write a function called “getElementsLessThan100AtProperty”.

// Given an object and a key, “getElementsLessThan100AtProperty” returns an array containing all the elements of the array located at the given key that are less than 100.

// Notes:
// * If the array is empty, it should return an empty array.
// * If the array contains no elements less than 100, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the key, it should return an empty array.

getElementsLessThan100AtProperty = (obj, key) => {
    const arr = []
    if (Array.isArray(obj[key])) {
        for (let i = 0; i < obj[key].length; i++) {
            if (obj[key][i] < 100) {
                arr.push(obj[key][i])
            }
        }
    }
    return arr
}


//::input::

const icecream = {
    scoops: [1, 200, 3, 4],
    flavors: 100,
    favorite: "chocolate"
}

//::output::
//scoops//arr = [1,3,4]
//flavors//arr = []
//favorite// arr= []

console.log(getElementsLessThan100AtProperty(icecream, "scoops"))