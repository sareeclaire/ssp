// Write a function called “removeOddValues”.

// Given an object, “removeOddValues” removes any properties whose values are odd numbers.

removeOddValues = (obj) => {
    for (let key in obj) {
        obj[key] % 2 !== 0 ? delete obj[key] : " "
    }
    return obj
}

const pillows = {
    silk: 4,
    cotton: 3,
    canvas: 2,
    leather: 1
}

const output = removeOddValues(pillows)
console.log(output)