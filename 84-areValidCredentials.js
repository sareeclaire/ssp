// Write a function called “areValidCredentials”.

// Given a name and a password, “areValidCredentials”, returns true if the name is longer than 3 characters, AND, the password is at least 8 characters long. Otherwise it returns false.


areValidCredentials = (name, passw) => name.length > 3 && passw.length >= 8 

console.log(areValidCredentials("Gordon", "blue7890"))