//Search insert Postion
function searchInsert(nums,target){
let left = 0;
let right = nums.length -1;

	while(left <= right){
	let mid = Math.floor((left + right) /2);
	if (nums[mid] === target) return mid;
	else if(nums[mid] < target) left = mid + 1;
		else right = mid -1;
	}
	return left;
}

console.log(searchInsert([1,3,4,5], 2))
// same tree
function isSameTree(p,q){
if(!p && !q){return true;}
else if( !p || !q){ return false;}
else if (p.val !== p.val) {return false;}
	return isSameTree(p.left , q.left ) && isSameTree(p.right, q.right);
}
