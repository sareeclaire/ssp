// Write a function called “removeElement”.

// Given an array of elements, and a “discarder” parameter, “removeElement” returns an array containing the items in the given array that do not match the “discarder” parameter.

// Notes:
// * If all the elements match, it should return an empty array.
// * If an empty array is passed in, it should return an empty array.

removeElement = (arr,disc) => {
    const newArray = []
    if(Array.isArray(arr)){
        for(let i = 0; i<arr.length;i++){
           if(arr[i] !== disc){
               newArray.push(arr[i])
           }
        }
    }
    return newArray
   
}



var output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]
//::input::
//(arr, disc)
//const water = [1,2,3,4]
//disc


//::output::
//arr!== disc //[arr]


