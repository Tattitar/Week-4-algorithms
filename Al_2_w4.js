// 2 - Create a function that pushes 2 values to array and returns 
// an array of 2 values
// let value1 = ‘Tatiana’;
// let value2 = 'Diana';
// pushToArray(value1, value2) ➞ ['Tatiana', 'Diana'];

let value1 = 'Tatiana';
let value2 = 'Diana';


function pushToArray(a, b){
    let myArray = []; 
    myArray.push(a, b);
    return myArray;
}
console.log(pushToArray(value1,value2));