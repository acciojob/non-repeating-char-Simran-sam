function firstNonRepeatedChar(str) {
 // Write your code here
	let obj= {};
	for(let char of str){
		if (obj[char]===undefined) {
			obj[char]=0; 
		}
		obj[char]+=1;
	}
	for(let char of str){
		if (obj[char]===1) {
			return char;
		}
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
