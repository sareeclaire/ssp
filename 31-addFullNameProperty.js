// Write a function called “addFullNameProperty”.
// Given an object that has a “firstName” property and a “lastName” property, “addFullNameProperty” 
// adds a “fullName” property whose value is a string with the first name and last name separated by a space.


addFullNameProperty = (name) => name.fullname = name.firstname + " " + name.lastname


// function addFullNameProperty(name){
    
//     name.fullname = name.firstname + " " + name.lastname
// }

let name = {
    firstname: "Gordon",
    lastname: "Yu"
}

addFullNameProperty(name)
console.log(name)