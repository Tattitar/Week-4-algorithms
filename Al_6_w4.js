// 6 - Add up the Numbers from a Single Number
// How it works? - When you pass 4 as a parameter, your function
// should do 1+2+3+4 and return the result which will = 10. 
// addUp(4) ➞ 10
// addUp(13) ➞ 91
// addUp(600) ➞ 180300

let count = 0;  // 1 after 1st loop // 2nd = 2
let result = 0; // 1 after 2nd loop

function addUp(num) {
	while (count <= num) {
	if (count == 1) {
	  result = count;
	}
	else {
		// First loop: gets executed. result = 0+0;
		result += count;
	}
	// During the first loop this will get executed. count = 0 + 1
	// Second loop: count = 1+1
	count++;
}

return result;
}

console.log(addUp(4));
console.log(addUp(13));
console.log(addUp(600));