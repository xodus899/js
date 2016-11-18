//take a string and alternate characters... ex: "def"," abc" --> daebfc;

function merge(a,b){
//create a counter
var x = 0;
//create a variable for an empty string to save the the new string.
var newString = "";
// loop over the first string length.
while (x < a.length) {
//add the index of each string looped over first string 
    newString += a[x];
//add the index of each string looped over second string
    newString += b[x];
// start counter
    x++;
  
}
//return new string;
return newString;

}
//call the function with strings passed through
merge("abc","def")