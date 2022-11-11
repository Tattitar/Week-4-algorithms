// 7 - Find the Smallest and Biggest Numbers
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
// minMax([2334454, 5, 6, 348]) ➞ [5, 2334454]
// minMax([1]) ➞ [1, 1]


const minMax = (arr) => {
    let arr1 = [];
       arr1.push(Math.min(...arr));
       arr1.push(Math.max(...arr));
    return arr1
  };
  
console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([2334454, 5]));
console.log(minMax([1]));