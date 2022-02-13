//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// 1

function uppercase(str) {
  let splitStr = str.toLowerCase().split(' ');
  for (let i = 0; i < splitStr.length; i++) {
     splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
  }
  
  return splitStr.join(' '); 
}

console.log(uppercase("the quick brown fox"));

// 2
// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

function find_longest_word(str) {
  let strSplit = str.split(" ");
  let longestWord = 0;
  let word = "";
  for(let i = 0; i < strSplit.length - 1; i++){
    if(longestWord < strSplit[i].length){
      longestWord = strSplit[i].length;
      word = strSplit[i]
    }
  }
  return word;
}
console.log(find_longest_word("Web Development Tutorial"));

// 3
// Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.

function Longest_Country_Name(country_name) {
 
  let longestWord = 0;
  let country = "";
  for(var i = 0; i < country_name.length; i++){
    if(country_name[i].length > longestWord){
	longestWord = country_name[i].length;
  country = country_name[i];
     }
  }
  return country;
  
}

console.log(
  Longest_Country_Name(["Australia", "Germany", "United States of America"])
);


