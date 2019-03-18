// Write a function called “removeArrayValues”.

// Given an object, “removeArrayValues” removes any properties whose values are arrays.

removeArrayValues = (obj) => {
    for (let key in obj) {
        if (Array.isArray(obj[key])){
            delete obj[key]
        }
    }
    return obj
}

const pizza = {
    cheese: 1,
    toppings: ["sausage", "bell peppers", "mushrooms", "onions"],
    combos: 3
}

const output = removeArrayValues(pizza)
console.log(output)