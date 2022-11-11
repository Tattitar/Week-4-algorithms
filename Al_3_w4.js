// 3 - Create a function that loops through array and outputs all 
// names with < 4 characters
// let namesArray = ['Sergii', ‘Ana’, ‘John’, ‘Ben’, 'Jacob'];
// findShortNames(namesArray) ➞ ‘Ana’ ‘Ben’

let namesArray = ['Sergii', 'Ana', 'John', 'Ben', 'Jacob'];
    
function findShortNames(myArray) {
    for (let i = 0; i < myArray.length; i++) 
        if (myArray[i].length < 4) {
            console.log(myArray[i]);
        }
    }
findShortNames(namesArray);