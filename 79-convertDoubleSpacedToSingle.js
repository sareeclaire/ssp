// Write a function called “convertDoubleSpaceToSingle”.

// Given a string, “convertDoubleSpaceToSingle” returns the passed in string, with all the double spaces converted to single spaces.

convertDoubleSpaceToSingle = (str) => str.split('  ').join(' ')

const vacation = "We  are  going  to  Dallas."

const output = convertDoubleSpaceToSingle(vacation)
console.log(output)

