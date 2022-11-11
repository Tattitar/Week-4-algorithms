// 5 - Equality Check
// checkEquality(1, true) ➞ false // A number and a boolean: the value and type are different.
// checkEquality(0, "0") ➞ false // A number and a string: the type is different.
// checkEquality(1, 1) ➞ true // A number and a number: the type and value are equal.

function checkEquality(var1, var2) {
    //ternary style If else tatement
    //(var1 === var2) ? true : false;
    (var1 == var2) ? console.log('true') : console.log('false');
}

// let result = checkEquality (1, true);

// #1
console.log("#1 A number and boolean: the value and type are different:")
checkEquality(1, true);

// #2 
console.log("#2 A number and a string: the type is different:")
checkEquality(0, "0");

//#3
console.log("#3 A number and a number: the type and value are equal:")
checkEquality(1, 1);

