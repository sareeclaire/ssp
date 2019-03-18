// Write a function called “countNumberOfKeys”.

// Given an object, “countNumberOfKeys” returns how many properties the given object has.

countNumberOfKeys = (obj) => Object.keys(obj).length


const pillows = {
    pillow1: "cotton",
    pillow2: "silk",
    pillow3: "canvas",
    pillow4: "leather"
}

const output = countNumberOfKeys(pillows)
console.log(output)