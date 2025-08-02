//1.2 permuation
function perm(s1,s2){
	if(s1.length !== s1.length){return false;}
let sort1 = s1.split('').sort().join('');
let sort2 = s2.split('').sort().join('');
if(sort1 === sort2){
	console.log("valid");
	return true;}
else{
	console.log("Error");
return false;
}

}
//1.1 unique
function unique(s1){
let result = new Map();
	for(let c of s1){
		if(result.has(c)){
			console.log("DUPE FOUND");
			return false;}
		result.set(c , true);
		}
	return true;
		}
//1.5 one AWAY
function ONE(s1,s2){
if(Math.abs(s1.length - s1.length ) > 1){return false;}
let [shorter , longer] = s1.length < s1.length ? [s1,s2] : [s2,s1];

let index1 = 0;
let index2 = 0;
let foundDiff = false;
	while (index1 < shorter.length && index2 < longer.length){

		if(shorter[index1] !== longer[index2]){
			if(foundDiff) return false;
			foundDiff = true;
					}
		if(shorter.length === longer.length){
		index1++;
		}
		else {index1++}
		index2++
	}
return true;

}

// 1.3 urlify
function URL(s1){
let result = [];
	for (let c of s1){
		if (c === " "){
		result.push("%20");}
		else {result.push(c);}
		}
return result.join("");	
}
// 1.4 palidrome permutation
function pali(s1){
let freq = new Map();
let oneOdd = false;
for (let c of s1){
	freq.set(c, freq.get(c) || 0) +1;
	}
for(let count of freq.values()){	
	if(count % 2 !== 0){
		if(oneOdd) {return false;}
		oneOdd = true;}
				}
	return true;



}
