// chaining if else statements

function testSize(num) {
  // Only change code below this line
  if(num < 5){
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15){
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else if (num >= 20) {
    return "Huge";
  } else {
  
  return "Change Me";
  // Only change code above this line
 }
}
// Change this value to test
testSize(7);

// Golf code


function golfScore(par, strokes) {
  // Only change code below this line
  if (par == 4 && strokes == 1) {
    return "Hole-in-one!";
  } else if (par == 4 && strokes == 2) {
     return "Eagle";
  } else if (par == 5 && strokes == 2) {
    return "Eagle";
  } else if (par == 4 && strokes == 3) {
    return "Birdie";
  } else if (par == 4 && strokes == 4) {
    return "Par";
  } else if (par == 1 && strokes == 1) {
    return "Hole-in-one!";
  } else if (par == 5 && strokes == 5) {
    return "Par"; 
  } else if (par == 4 && strokes == 5) {
    return "Bogey";
  } else if (par == 4 && strokes == 6) {
    return "Double Bogey";
  } else if (par == 4 && strokes == 7) {
    return "Go Home!";
  } else if (par == 5 && strokes == 9) {
    return "Go Home!";
  } else { 
  return "Change Me";
// Only change code above this line
  }
}

// Change these values to test
golfScore(5, 4);

// Switch statements --- Aswitch statement tests a value and can have many casestatements which defines various possible values. Statements are executed from the first matched case value until a break is encountered.
// case values are tested with strict equality (===). The break tells JavaScript to stop executing statements. If the break is omitted, the next statement will be executed.
 
 
function caseInSwitch(val) {
 
  var answer = "";
 
  // Only change code below this line
 
  switch (val) {
 
  case 1:
 
    answer = "alpha";
 
    break;
 
  case 2:
 
    answer = "beta";
 
    break;
 
  case 3:
 
    answer = "gamma";
 
    break;
 
  case 4:
 
    answer = "delta";
 
  } 
 
  // Only change code above this line  
 
  return answer;  
 
}
 
// Change this value to test
 
caseInSwitch(1);
 

 
 // In a switch statement you may not be able to specify all possible values as case statements. Instead, you can add the defaultstatement which will be executed if no matching case statements are found. Think of it like the final else statement in an if/elsechain.

 
 // A default statement should be the last case.

 
 
function switchOfStuff(val) {
 
  var answer = "";
 
  // Only change code below this line
 
  switch(val) {
 
    case "a":
 
      answer = "apple";
 
      break;
 
    case "b":
 
      answer = "bird";
 
      break;
 
    case "c":
 
      answer = "cat";
 
      break;
 
    default:
 
      answer = "stuff";
 
  }
 
 
  // Only change code above this line  
 
  return answer;  
 
}
 

// Change this value to test
 
switchOfStuff(1);
 

 
 
 
// If the break statement is omitted from a switch statement'scase, the following case statement(s) are executed until a breakis encountered. If you have multiple inputs with the same output, you can represent them in a switch statement like this:
 
 

function sequentialSizes(val) {
 
  var answer = "";
 
  // Only change code below this line
 
  switch(val) {
 
    case 1:
 
    case 2:
 
    case 3:
 
      answer = "Low";
 
      break;
 
    case 4:
 
    case 5:
 
    case 6:
 
      answer = "Mid";
 
      break;
 
    case 7:
 
    case 8:
 
    case 9:
 
      answer = "High";
 
  }
 
  // Only change code above this line  
 
  return answer;  
 
}
 
// Change this value to test
 
sequentialSizes(1);
 
 
 
// If you have many options to choose from, a switch statement can be easier to write than many chained if/else if statements. The following:
 
 

 
 
// cleaning this loop up from if to switch.. see below.
 
 
function chainToSwitch(val) {
 
  var answer = "";
 
  // Only change code below this line
 

  if (val === "bob") {
 
    answer = "Marley";
 
  } else if (val === 42) {
 
    answer = "The Answer";
 
  } else if (val === 1) {
 
    answer = "There is no #1";
 
  } else if (val === 99) {
 
    answer = "Missed me by this much!";
 
  } else if (val === 7) {
 
    answer = "Ate Nine";
 
  }
 
  // Only change code above this line  
 
  return answer;  
 
}

 
// Change this value to test
 
chainToSwitch(7);
 

 
 
// clean up of the loop above.

function chainToSwitch(val) {
 
  var answer = "";
 
  // Only change code below this line
 
  switch (val) {
 
     case"bob":
 
      answer = "Marley";
 
      break;
 
    case 42 :
 
      answer = "The Answer";
 
      break;
 
    case 1:
 
      answer = "There is no #1";
 
      break;
 
    case 99:
 
      answer = "Missed me by this much!";
 
      break;
 
    case 7:
 
      answer = "Ate Nine";
 
  }
 
  // Only change code above this line  
 
  return answer;  
 
}

 
// Change this value to test
 
chainToSwitch(7);
 

 
// A common anti-pattern is to use an if/else statement to do a comparison and then return true/false:
 

function isLess(a, b) {
 
  // Fix this code
 
  if (a < b) {
 
    return true;
 
  } else {
 
    return false;
 
  }
 
}
 

// Change these values to test
 
isLess(10, 15);
 

 
 
// Since === returns true or false, we can return the result of the comparison:
 
 

function isLess(a, b) {
 
  // Fix this code
 
  return a < b; 
 
}
 
// Change these values to test
 
isLess(10, 15);
 

 

 
// Modify the function abTest so that if a or b are less than 0 the function will immediately exit with a value of undefined.
 

// Setup
 
function abTest(a, b) {
 
  // Only change code below this line
 
  if(a < 0 || b < 0 ) {
 
    return undefined;
 
  }
 

  // Only change code above this line
 
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
 
}
 
// Change values below to test your code
 
abTest(2,2);
 

 
 

 // Count Change	  |    Cards
 //    +1	          |   2, 3, 4, 5, 6
 //     0	          |   7, 8, 9
 //    -1	          |   10, 'J', 'Q', 'K', 'A' 
 // You will write a card counting function. 
 // It will receive a cardparameter and increment or decrement 
 // the global count variable according to the card's value (see table). 
 // The function will then return a string with the current count and the string 
 // "Bet" if the count is positive, or "Hold" if the count is zero or negative. 
 // The current count and the player's decision ("Bet" or "Hold") should be separated by a single space.

 
 
 
// switch vs if else.
  
var count = 0;
 
function cc(card) {
 
  // Only change code below this line
 
   switch(card) {
 
     case 2:
 
     case 3:
 
     case 4:
 
     case 5:
 
     case 6:
 
       count += 1;
 
       break;
 
 
 
     case 10:
 
     case "J":
 
     case "Q":
 
     case "K":
 
     case "A":
 
       count -= 1;
 
       break;    
 
   }
 
    if (count > 0){
 
    return count + " Bet";
 
  } else {
 
    return count + " Hold";
 
  }
 
  
 
  return "Change Me";
 
  // Only change code above this line
 
}
 

 
 
// Add/remove calls to test your function.
 
// Note: Only the last will display
 
cc(2); cc(3); cc(7); cc('K'); cc('A');
 


// if/else
 
var count = 0;
 

 
 
function cc(card) {
 
  // Only change code below this line
 
  if(card == 2 || card == 3 ||card == 4 ||card == 5 || card == 6) {
 
    count += 1;
 
    
  } else if (card == 10 || card == "J" || card == "Q" || card == "K" || card == "A") {
 
    count --;
 
  } else if (card == 7 || card == 8 || card == 9) { 
 
 
  } 
 
  if (count > 0) {
 
    return count + " Bet";
 
  } else {
 
    return count + " Hold";
 
  }
 
  return count;
 
  // Only change code above this line
 
}
 
 
// Add/remove calls to test your function.
 
// Note: Only the last will display
 
cc(2); cc(3); cc(7); cc('K'); cc('A');
