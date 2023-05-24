function calculateMinCost() {
  //your code here
  let sumAll=0;;
  let sum=0;
	for(let i=0;i<arr.length;i++){
		sum+=arr[i];
		sumAll+=sum;
	}
  return sumAll;
  
}  
