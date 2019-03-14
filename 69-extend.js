// Write a function called “extend”.

// Given two objects, “extend” adds properties from the 2nd object to the 1st object.

// Notes:
// * Add any keys that are not in the 1st object.
// * If the 1st object already has a given key, ignore it (do not overwrite the property value).
// * Do not modify the 2nd object at all.

// function extend(obj1, obj2) {
//     for (let property in obj2) {
//         if (obj1.hasOwnProperty(property)) {
//             continue
//         } else {
//            obj1[property]=obj2[property]
//         }
//     }
//     return obj1
// }

function extend(obj1, obj2) {
    for (let key in obj2) {
        if (!obj1.hasOwnProperty(key)) {
            obj1[key] = obj2[key];
        }
    }
}



// const first = {
//     a: 1
// }
// const second = {
//     b: 2
// }

// const output = extend(first, second)
// console.log(output)


var obj1 = {
    a: 1,
    b: 2
};
var obj2 = {
    b: 4,
    c: 3
};

extend(obj1, obj2);

console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2); // --> {b: 4, c: 3}