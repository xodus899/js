//making objects private.
//Create the variable inside the constructor using the varkeyword we're familiar with, instead of creating it as a property of this.

var Car = function() {
  // this is a private variable
  var speed = 10;

  // these are public methods
  this.accelerate = function(change) {
    speed += change;
  };

  this.decelerate = function() {
    speed -= 5;
  };

  this.getSpeed = function() {
    return speed;
  };
};

var Bike = function() {

  // Only change code below this line.
  var gear= 0;
  
  this.setGear = function(change){
    gear = change;
  };
  
  this.getGear = function(){
     return gear;
  };
};

var myCar = new Car();

var myBike = new Bike();

//iteration over arrays with map
//The map method will iterate through every element of the array, creating a new array with values that have been modified by the callback function, and return it.. map will make a copy of the array , and keep the old value.
//Use the map function to add 3 to every value 

var oldArray = [1,2,3,4,5];

// Only change code below this line.

var newArray = oldArray.map(function(val){
  return val + 3;
});

//arrays with reduce 

var array = [4,5,6,7,8];
var singleVal = 0;

// Only change code below this line.

singleVal = array.reduce(function(addValue,currentValue){
  return addValue + currentValue;
});

//arrays with filter
//use filter to return anything less than 6

var oldArray = [1,2,3,4,5,6,7,8,9,10];

// Only change code below this line.


var newArray = oldArray.filter(function(val){
  return val < 6;
});

//sorting arrays

//sort  largest to smallest.. -1,0,1

var array = [1, 12, 21, 2];

// Only change code below this line.

array.sort(function(a,b){
 return b - a;
});

//reversing arrays

//reverse the array and assign to new variable to save.

var array = [1, 12, 21, 2];

// Only change code below this line.

array.sort(function(a,b){
 return b - a;
});

// add arrays together with concat

//Use .concat() to concatenate concatMe onto the end of oldArray and assign it to newArray.

var oldArray = [1,2,3];

var newArray = [];

var concatMe = [4,5,6];

// Only change code below this line.

newArray = oldArray.concat(concatMe);

//example 2

var car = ["pontiac"];

var wholeCar = [];

var model = ["g8"];

var sub =["gt"];

var sub1 = ["gxp"]

wholeCar = car.concat(model,sub,sub1);

//split strings

//Use split to create an array of words from string and assign it to array

var string = "Split me into an array";

var array = [];

// Only change code below this line.

array = string.split(" ");

//example 2

var x = "hello what is today?";

var y = []

y = x.split(" ");

//joining strings

//Use the join method to create a string from joinMe with spaces in between each element and assign it to joinedString.

var joinMe = ["Split","me","into","an","array"];

var joinedString = '';

// Only change code below this line.

joinedString = joinMe.join(" ");

//example 2

var x = ["pontiac","g8","gt","6.0"];

var string = ''

string = x.join(" ");










