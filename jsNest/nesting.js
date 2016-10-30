//nesting for loops

// Modify function multiplyAll so that it multiplies the product variable by each number in the sub-arrays of arr


function multiplyAll(arr) {
  var product = 1;
  // iterate over arr
   for(var i = 0; i < arr.length; i++){
//verify length of arr
     for(var j = 0; j < arr[i].length; j++){
//store results from product * arr
       console.log(product *= arr[i][j]);
     }
   }
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);


//  js while loop

//Push the numbers 0 through 4 to myArray using a while loop.

var myArray = [];
 
var i = 0;

while(i < 5){
 
  myArray.push(i);
 
  i++;
 
 //profile lookup

 
/*  
 The function should check if firstNameis an actual contact's firstName and the given property (prop) is a property of that contact.

 
 If both are true, then return the "value" of that property.

 
 If firstName does not correspond to any contacts then return "No such contact"

 
 If prop does not correspond to any valid properties then return "No such property"

 
*/
 
//Setup
 
var contacts = [
 
    {
        "firstName": "Akira",
 
        "lastName": "Laine",
 
        "number": "0543236543",
 
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
 
    {
        "firstName": "Harry",
 
        "lastName": "Potter",
 
        "number": "0994372684",
 
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
 
    {
        "firstName": "Sherlock",
 
        "lastName": "Holmes",
 
        "number": "0487345643",
 
        "likes": ["Intriguing Cases", "Violin"]
    },
 
    {
        "firstName": "Kristian",
 
        "lastName": "Vos",
 
        "number": "unknown",
 
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];
 
function lookUpProfile(firstName, prop){
 
  for (var i = 0; i < contacts.length; i++) {
 
  console.log(contacts[i]);
 
    if (contacts[i].firstName === firstName){
 
      if (contacts[i].hasOwnProperty(prop) === true){
 
        return contacts[i][prop];
 
      } else {
 
        return "No such property";
      }
    }
  }
 
  return "No such contact";
}
// Change these values to test your function
 
lookUpProfile("Akira", "likes");