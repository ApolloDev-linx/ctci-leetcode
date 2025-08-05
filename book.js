//1.6 string compression
function stringCOMP(s1){
if (s1.length < 2 || s1 === ""){return s1;}
let compress = "";
let count = 1;
	for(let i = 1; i < s1.length; i++){
		if(s1[i] === s1[i - 1]){
			count++;
				}
		else {
		compress+= s1[i -1] + count;
		count = 1;}
		
	
				}
	compress+= s1[s1.length - 1] + count;
	return compress.length < s1.length ? compress : s1;
}
console.log(stringCOMP("aaacbbbbbkkkkk"))
