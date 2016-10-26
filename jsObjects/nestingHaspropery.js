//accessing nested arrays

// Setup
var myPlants = [
  { 
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }  
];

// Only change code below this line

var secondTree = myPlants[1].list[1]; // Change this line



// accessing nested objects

var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

// Only change code below this line

var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line



// manipulating complex objects


var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [ 
      "CS", 
      "8T", 
      "LP" ],
    "gold": true,
  },
  // Add second object below.
  { 
    "artist":"Buster",
    "title": "Barks A-lot",
    "release_year": 2015,
    "formats": [
      "CD",
      "Casette",
      "DVD",
      "Lp"
    ]
  }
];

// Testing Objects for properties

// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if (myObj.hasOwnProperty (checkProp)=== true)  
    return myObj[checkProp];

  return "Not Found";
}

// Test your code by modifying these values
checkObj("gift");