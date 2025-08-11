function isSameTree(p,q){
if(!p && !q){return true;}
else if( !p || !q){ return false;}
else if (p.val !== p.val) {return false;}
	return isSameTree(p.left , q.left ) && isSameTree(p.right, q.right);
}
