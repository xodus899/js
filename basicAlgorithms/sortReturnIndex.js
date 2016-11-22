function getIndexToIns(arr, num) {
	//sort the array
  arr.sort(function(a,b){
   return a - b;   
  });
  //loop over the array
  for(i = 0; i < arr.length; i++){
    //write a conditional statement
    //return parseInt
    if(arr[i] >= num)
      return parseInt(i);
  }
  //return length of the array
  console.log(arr.length);
  return arr.length;
}

getIndexToIns([40, 60], 50);
