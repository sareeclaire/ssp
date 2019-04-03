// Write a function called “getOddLengthWordsAtProperty”.

// Given an object and a key, “getOddLengthWordsAtProperty” returns an array containing all the odd length word elements of the array located at the given key.

// Notes:
// * If the array is empty, it should return an empty array.
// * If it contains no odd length elements, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the given key, it should return an empty array.


getOddLengthWordsAtProperty = (obj, key) => {
    let newarr = []
    let arr = obj[key]
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].length % 2 !== 0) {
                newarr.push(arr[i])
            }
        }
    }
    return newarr
}


//input::
const icecream = {
    flavors: ['vanilla', 'chocolate', 'mint n chip', 'cherry'],//expected output//['vanilla','chocolate','mint n chip']//[]//empty array//no odd elements // empty array etc.
    types: 10//empty array
    //empty array
}

console.log(getOddLengthWordsAtProperty(icecream, 'flavors'))

