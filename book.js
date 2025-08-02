function perm(s1,s2){
let sorted1 = s1.split("").sort().join("");
let sorted2 = s2.split("").sort().join("");

	if(sorted1 === sorted2){
		console.log(s1,s2);

		}
	else{return false;}
return true;
}
console.log(perm("hey","yem"));
