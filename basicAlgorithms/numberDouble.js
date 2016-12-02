//take a function if the array is equal to the number double the number.

function double(a,b){
  a.sort(function(c,d){
    return c - d;
  });
  for(var i = 0; i < a.length; i++)
   if(a[i] === b){
     b = b * 2;
   }
  return b;
}

double([1,2,4],4);
