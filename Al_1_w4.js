// 1 - Create a function that loops through an array and outputs 
// every value(Solution provided below)
// let namesArray = ['Sergii', ‘Ana’, ‘John’, ‘Ben’, 'Jacob'];
// outputEveryValueOfArray(namesArray) ➞ 'Sergii' ‘Ana’ ‘John’ ‘Ben’ 'Jacob'


let namesArray = ['Sergii', 'Ana', 'John', 'Ben', 'Jacob'];
    function outputEveryValueOfArray(array){
        for (let i = 0; i < array.length; i++) {
            console.log(array[i])
    }
}

outputEveryValueOfArray(namesArray)