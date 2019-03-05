// Write a function called “addObjectProperty”.

// Given two obj and a key, 
// “addObjectProperty” sets a new property on the 1st obj at the given key. 
// The value of that new property is the entire 2nd object.

function addObjectProperty (obj1,obj2,key){
    obj1[key] = obj2
}

let junkfood = {
    favorite: "cake"
}
let iceCream = {
    flavor1: "cookies n creme"
}

addObjectProperty(junkfood,iceCream,"type")
console.log(junkfood)