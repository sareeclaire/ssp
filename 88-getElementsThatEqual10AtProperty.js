// Write a function called “getElementsThatEqual10AtProperty”.

// Given an object and a key, “getElementsThatEqual10AtProperty” returns an array containing all the elements of the array located at the given key that are equal to ten.

// Notes:
// * If the array is empty, it should return an empty array.
// * If the array contains no elements that are equal to 10, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the key, it should return an empty array.




getElementsThatEqual10AtProperty = (obj, key) => {
    let array = []
    for (let key in obj) {
        for (let i = 0; i < obj[key].length; i++) {
            if (obj[key][i] === 10) {
                array.push(10)
            }
        }
    }
    return array
}



var obj = {
    key: [1000, 10, 50, 10]
};

array = [1000, 10, 50, 10]
var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]