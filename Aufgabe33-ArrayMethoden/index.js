// Four Letter  Words. 
function isFourLetters(array) {
 return array.filter(word => word.length == 4)
}

console.log(isFourLetters(["John", "James", "Jack", "Jeanne"]));
console.log(isFourLetters(["Tomate", "Mais", "Kopfsalat"]));
console.log(isFourLetters(["Hund", "Katze", "Reh"]));

console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++');

// Months

function getMonthName(number) {
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let monthIWant = months.filter((month,index) => index === number - 1)
return monthIWant
}

console.log(getMonthName(3));
console.log(getMonthName(12));
console.log(getMonthName(6));


console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ ');

// Amplify the Multiples of 4
function amplifyMultiplesOfFour(number) {
    let numbers = []
    for(let i = 1; i <= number; i++){
      numbers.push(i)
    }

    let amplifiedNumbers = numbers.map(num => num % 4 === 0 ? num * 10 : num)
    return amplifiedNumbers;
}

console.log(amplifyMultiplesOfFour(4));
console.log(amplifyMultiplesOfFour(3));
console.log(amplifyMultiplesOfFour(25));


console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');



// One is not like the others...

function unique(array) {
   let zahl = 0
   for (let i = 0; i < array.length; i++) {
       let current = array[i]
       // ist das index von der zahl, das wir finde   auch das lezte index? wenn ja, dann kommt die zahl einmal vor.
       if (array.indexOf(current) === array.lastIndexOf(current)) {
           return current
       }
     
   }

   
}

console.log(unique([3, 3, 3, 7, 3, 3]));
console.log(unique([0, 0, 0.77, 0, 0]));
console.log( unique([0, 1, 1, 1, 1, 1, 1, 1]));

console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');





// Word Ranking
function wordRank() {
   
}


// c4n y0u r34d th15? 
function code(str) {
 const lowerStr = str.toLowerCase();
 const letters = lowerStr.split('');
 const hackerSpeak = [];

 for(let i = 0; i < letters.length; i++){
    if(letters[i] === 'a'){
       letters[i] = '4';
       hackerSpeak.push(letters[i]);
    }else if (letters[i] === "e") {
      letters[i] = "3";
      hackerSpeak.push(letters[i]);
  } else if (letters[i] === "i") {
      letters[i] = "1";
      hackerSpeak.push(letters[i]);
  } else if (letters[i] === "o") {
      letters[i] = "0";
      hackerSpeak.push(letters[i]);
  } else if (letters[i] === "s") {
      letters[i] = "5";
      hackerSpeak.push(letters[i]);
  } else {
      hackerSpeak.push(letters[i]);
  }
 }
 const hacked = hackerSpeak.join('');
 return hacked
   
} 

console.log(code("javascript ist cool"));
console.log(code("Programmieren macht Spaß"));
console.log(code("Werde ein Programmierer"));


console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');


// Bonus 1:

function isSymmetrical (num){
   let reverseNum = num.toString().split('').reverse().join('')
   let arrNum = num.toString().split('').join('')
   if(arrNum === reverseNum){
      return true;
   }else{
      return false;
   }

}

console.log(isSymmetrical(7227));
console.log(isSymmetrical(9939));
console.log(isSymmetrical(12567));
console.log(isSymmetrical(1112111));

console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');

// Bonus 2:


const toCamelCase = sentence => sentence  
    .split('_')  
    .map((word, index) => {  
        if (word === 0) {  
            return part.toLowerCase();  
        }  
        return firstUppercase(word);  
    })  
    .join('');  
const firstUppercase = word => word &&  
    word.charAt(0).toUpperCase() + word.slice(1);  
  
 
console.log(toCamelCase('hello_world'));
console.log(toCamelCase("javascript_is_fun") );  


// Bonus 3: 


