/  return an array with the largest number of the four sub-arrays


function largestOfFour(arr) {
  var newArr = [];
  for(var i = 0; i <arr.length; i++){
   var largestNumber = 0;
    for (var j = 0; j < arr[i].length;j++){
      if(arr[i][j] > largestNumber){
        largestNumber = arr[i][j];
      }
      newArr[i] = largestNumber;
    }
    
  }
    return newArr;
  // You can do this!
  
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


