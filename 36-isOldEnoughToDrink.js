// Write a function called “isPersonOldEnoughToDrink”.

// Given a “person” object, that contains an “age” property, 
// “isPersonOldEnoughToDrink” returns whether the given person is old enough to drink.

// Notes:
// * The legal drinking age in the United States is 21.


// function isOldEnoughToDrink(object){
//     return object.age >= 21
// }


isOldEnoughToDrink = (object) => object.age >= 21

let person = {
    age: 30
}
let output = isOldEnoughToDrink(person)
console.log(output)