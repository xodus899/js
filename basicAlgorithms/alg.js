//basic algorithms

//reverse the provided string
//split into an array,separate by letter, then reverse the array, join back into a string.

function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString("hello");

//return the factorial of a number..
//factorial is the number and numbers below it.. ex : 5  then 4,3,2,1

function factorialize(num) {
    if (num === 0) {
    return 1;
  }
  
  // This is it! Recursion!!
  return num * factorialize(num - 1);
}

factorialize(5);

//palindromes

function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
  // Good luck!
  
}

palindrome("dad");

// return the longest word
function findLongestWord(str) {
  var x = str.split(" ");
  var count = 0;
  for (var i = 0; i < x.length; i++) {
    if(x[i].length > count){
      count = x[i].length;
    }
  }
  return count;
}

findLongestWord("The quick brown fox jumped over the lazy dog");