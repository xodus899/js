// generate random number
function randomFraction() {
  // Only change code below this line.
  return Math.random();
  // Only change code above this line.
}

//generate a random number between 0 and 9
function randomWholeNum() {
  // Only change code below this line.
  return Math.floor(Math.random()*10);
}
randomWholeNum();

//Random whole numbers within a range
function randomRange(myMin, myMax) {

  return Math.floor(Math.random()*(myMax-myMin +1)) + myMin ;
}

// Change these values to test your function
var myRandom = randomRange(5, 15);
myRandom;

// Search regular expressions

/* Regular expressions are used to find certain words or patterns inside of strings.
find the word the in the string The dog chased the cat, we could use the following regular expression: /the/gi
Let's break this down a bit:
/ is the start of the regular expression.

the is the pattern we want to match.

/ is the end of the regular expression.

g means global, which causes the pattern to return all matches in the string, not just the first one.

i means that we want to ignore the case (uppercase or lowercase) when searching for the pattern.

*/

// Setup
var testString = "Ada Lovelace and Charles Babbage designed the first computer and the software that would have run on it.";
// Example
var expressionToGetSoftware = /software/gi;
var softwareCount = testString.match(expressionToGetSoftware).length;
  
var expression = /and/gi;

// Only change code above this line

// This code counts the matches of expression in testString
var andCount = testString.match(expression).length;  // this returns the count for the word searched for var expression. remove .length and it will give you the word(s)
andCount; // call the variable to display count ... words if no length.

// Find numbers with regular expressions

/* We can use special selectors in Regular Expressions to select a particular type of value.
One  selector is the digit selector \d  is used to retrieve one digit  (0 to 9) in a string.

In JavaScript ---->  /\d/g

Appending a plus sign (+) after the selector, e.g. /\d+/g, allows this regular expression to match one or more digits.

The trailing g is short for 'global', which allows this regular expression to find all matches rather than stop at the first match.
*/

// Setup
var testString = "There are 3 cats but 4 dogs.";
// Only change code below this line.

var expression = /\d+/g;  // Change this line
// Only change code above this line

// This code counts the matches of expression in testString
var digitCount = testString.match(expression).length;
digitCount;

// example 2
var x = "this string contains numbers maybe 1, how about 2, or 3, maybe 4, no 5, what 6, crazy 7, why not 8, who stops there, make it 9, ill do 10."

var y = /\d+/g ;

var z = x.match(y).length;
z;

// Find white space with regular expressions

/*

Regular expression selectors like \s find whitespace in a string.

Whitespace characters are " " (space), \r (the carriage return), \n(newline), \t (tab), and \f (the form feed).

Whitespace regular expression looks like this:

/\s+/g

*/

// Setup
var testString = "How many spaces are there in this sentence?";

// Only change code below this line.

var expression = /\s+/g;  // Change this line

// Only change code above this line

// This code counts the matches of expression in testString
var spaceCount = testString.match(expression).length;
spaceCount;


//Example 2 

var x = " How many white spaces can we create? Lets find out, 1, 22222, 3. The world may never know!"

var y = /\s+/g;

var storeInfo = x.match(y).length;
storeInfo;

// Invert regular expressions Javascript

/* 

You can invert any match by using the uppercase version of the regular expression selector.

 \s will match any whitespace, and \S will match anything that isn't whitespace.

*/

// Setup
var testString = "How many non-space characters are there in this sentence?";

// Only change code below this line.

var expression = /\S/g;  // Change this line

// Only change code above this line

// This code counts the matches of expression in testString
var nonSpaceCount = testString.match(expression).length;
nonSpaceCount;

// example 2

var x = "Hello today is the day we invert regular expressions. This will count the characters and not white spaces";
var y= /\S/g;

var storeInfo = x.match(y).length;
storeInfo;
