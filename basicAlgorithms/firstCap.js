// Make the first letter of each word in a string capitalized.

function titleCase(str) {
  //take str and make it lowercase
  str = str.toLowerCase();
  // then split into an array
  str = str.split(" ");
  // then loop over the length of the array;
  for(var i = 0; i < str.length; i++){
    // then take the str and the first char make upperCase and concat the str[i] and slice the first index.
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
}

titleCase("I'm a little tea pot");