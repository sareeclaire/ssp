// Write a function called “or”.

// Given 2 boolean expressions, “or” returns true or false, corresponding to the ‘||’ operator.
// Notes:
// * Do not use the || operator.
// * Use ! and && operators instead.

function or(exp1, exp2) {
    // if (exp1 === true && exp2 === true) {
    //     return true;
    // } else if(exp1 === true && exp2 !== true) {
    //     return true;
    // } else if(exp1 !== true && exp2 === true) {
    //     return true;
    // } else {
    //     return false;
    // }

    if (!exp1 && !exp2) {
        return false;
    } else {
        return true;
    }


}


const output = or(3 === 5, 3 === 6)
console.log(output)