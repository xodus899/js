// take the array and return a muli-array

function chunkArrayInGroups(arr, size) {
  // Break it up.
  var group = [];
   while (arr.length > 0) {
     group.push(arr.splice(0, size));
   }
   return group;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);

// remove the head elements of an array using splice or slice

function slasher(arr, howMany) {
  arr.splice(0,howMany);
  return arr;
}

slasher([1, 2, 3], 2);