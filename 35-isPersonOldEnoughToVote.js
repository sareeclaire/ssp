// Write a function called “isPersonOldEnoughToVote”.

// Given a “person” object, that contains an “age” property, 
// “isPersonOldEnoughToVote” returns whether the given person is old enough to vote.

// Notes:
// * The legal voting age in the United States is 18.



// function isPersonOldEnoughToVote(person) {
//     return person.age >= 18
// }


isPersonOldEnoughToVote = (person) => {
    if(person.age >= 18){
        return true
    }
    return false
}

let person = {
    age: 21
}

let output = isPersonOldEnoughToVote(person)
console.log(output)