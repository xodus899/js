// mutations 

function mutation(arr) {
  var x = arr[1].toLowerCase();
  var y = arr[0].toLowerCase();
  for (i=0;i< x.length;i++) {
    if (y.indexOf(x[i]) < 0)
      return false;
  }
  return true;
 }
