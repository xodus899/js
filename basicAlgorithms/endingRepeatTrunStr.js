//check to see if the ending is the same

function confirmEnding(str, target) {
 if (target === str.substring(str.length - target.length)) {
 return true;
} else {
  return false;
 }
}
confirmEnding("Bastian", "n");

//repeat a string
// if num is negative return an empty str

function repeatStringNumTimes(str, num) {
  if (num < 0){
    return "";
  }
  str = str.repeat(num);
  return str;
}
repeatStringNumTimes("abc", 3);

//truncate a string or reduce

function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num && num > 3) {
    return str.slice(0, (num - 3)) + '...';
  } else if (str.length > num && num <= 3) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }
}
truncateString("A-tisket a-tasket A green and yellow basket", 11);