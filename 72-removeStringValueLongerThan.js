// Write a function called “removeStringValuesLongerThan”.

// Given an number and an object, “removeStringValuesLongerThan” removes any properties on the given object whose values are strings longer than the given number.

// function removeStringValuesLongerThan(num, obj) {
//     for (let key in obj) {
//         if (obj[key].length > num) {
//             delete obj[key]
//         }
//     }
//     return obj
// }

removeStringValuesLongerThan = (num, obj) => {
    let keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
        if (obj[keys[i]].length > num) {
            delete obj[keys[i]]
        }
    }
    return obj
}

// const flowers = {
//     types: "lavendar"
// }

// const output = removeStringValuesLongerThan(13, flowers)
// console.log(output)


var obj = {
    name: 'Montana',
    age: 20,
    location: 'Texas'
};
removeStringValuesLongerThan(7, obj);
console.log(obj); // { age: 20, location: 'Texas' }