// 1
// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowel_count("The quick brown fox"));


//2
// Write a JavaScript function that generates a string id (specified length) of random characters.
function gleich(str1,str2){
  if(str1.toLowerCase() === str2.toLowerCase()) return true;
  return false;
  
}
console.log(gleich('hello', 'hELLo'));
console.log(gleich('motive', 'emotive'));
console.log(gleich('venom', 'VENOM'));
console.log(gleich('mask', 'mAskinG'));

// 3
// Write a JavaScript program to pass a 'JavaScript function' as parameter.
function gleichLang(zeichenkette1, zeichenkette2) {
   if(zeichenkette1.length === zeichenkette2.length){
    console.log(true);
   }else{
     console.log(false);
   }
   return 
}

gleichLang('AB', 'CD');
gleichLang('ABC', 'DE');
gleichLang('hello', 'coding');


