// Rewrite this if using the conditional operator '?':

/* let result;
let a=3;
let b=6;
if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
} */

/* _________________________________ */
let a=3;
let b=6;

 
result = a + b;



//write your code here 
console.log(result < 4 ? "unten" : "Über");

/* _________________________________ */




//Rewrite the code below to use the ternary operator (?:) (you should be able to condense the if-else logic into one line).
/* if (score > 1337)
{
    msg = "This is a new highscore!";
}
else
{
    msg = "You need more points to beat the highscore!";
} */

/* _________________________________ */

let score = 42;
let msg = "";

//write your code here 

console.log(score > 1337 ? "Das ist ein neuer Highscore!" : "Du brauchst mehr Punkte, um den Highscore zu schlagen!");

/* _________________________________ */


// Rewrite if..else using multiple ternary operators '?'.
//For readability, it’s recommended to split the code into multiple lines.

/* let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
} */

/* _________________________________ */
let message;
let login = "Mitarbeiter" 





//write your code here 
console.log(login === "Mitarbeiter" ? "Hallo" : "");
console.log(login === "Direktor" ? "Grüße" : "");
console.log(login === " " ? "Keine Meldung" : "");

/* _________________________________ */

