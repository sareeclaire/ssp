// Write a function called “keep”.

// Given an array and a keeper element, “keep” returns an array containing the items that match the given keeper element.

// Notes:
// * If no elements match, “keep” should return an empty array.

keep = (arr, ele) => {
    const array = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ele) {
            array.push(arr[i])
        }
    }
    return array
}


//input:: 
const colors = [1, 2, 3, 4, 5]//element: 3 //output: [3]

console.log(keep(colors, 3))