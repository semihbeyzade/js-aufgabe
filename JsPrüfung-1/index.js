// Add answers here 
// Füge deine Funktionen hier ein

console.log();
console.log('++++++++++++++++++++Aufgabe 1+++++++++++++++++++++++++++');
console.log();


// 1

const nameOfCity = (str) => {
    if((str.substring(0,3)).toLowerCase() === 'los' || (str.substring(0,3)).toLowerCase() === 'new') return true;
    return false;
}

console.log(nameOfCity('New York'));
console.log(nameOfCity('newark'));
console.log(nameOfCity('London'));

console.log();
console.log('+++++++++++++++++++Aufgabe 2++++++++++++++++++++++++++++');
console.log();

// 2

const isDivisible = (num) => {
  if (num % 100 === 0) return true;
  return false;
};

console.log(isDivisible(1));
console.log(isDivisible(1000));
console.log(isDivisible(100));

console.log();
console.log('+++++++++++++++++++++Aufgabe 3++++++++++++++++++++++++++');
console.log();

// 3

const missingAngle = (num1, num2) => {
    
    let num3 = 180 - (num1 + num2);
    if(num3 > 90){
        return `obtuse`
    }else if(num3 === 90){
        return `right angle`
    }else if(num3 < 90){
        return `acute`
    }
      
  }

  console.log(missingAngle(11,20));
  console.log(missingAngle(27,59));
  console.log(missingAngle(135,11));
  console.log(missingAngle(45,45));

console.log();
console.log('++++++++++++++++++++++Aufgabe 4+++++++++++++++++++++++++');
console.log();

// 4 

const isRaining = (check) => {
    return (check ? 'wet day - you need an umbrella!' : 'dry day - leave your umbrella at home!');
  }

  console.log(isRaining(true));

console.log();
console.log('++++++++++++++++++++Loop 1+++++++++++++++++++++++++++');
console.log();

// Loops
// 1

const geometricalSequence = (num4) => {
    let string = '';
      for(let i = 0; i <= num4; i++){
          string += 2 ** i + ' ';
         
      }
      return string;
  }

  console.log(geometricalSequence(8));

  console.log();
  console.log('++++++++++++++++++++++Loop 2+++++++++++++++++++++++++');
  console.log();
  
// 2

const multiplesOfThree = (num5) => {
    let string = '';
      for(let i = 1; i <= num5; i++){
         string += 3 * i + ' ';
    }
         return string;
  }

  console.log(multiplesOfThree(5));

  console.log();
  console.log('++++++++++++++++++++++Mathe 1+++++++++++++++++++++++++');
  console.log();
  

// Mathe
// 1

const powerOf = (num6) => {
    return Math.pow(num6, num6);
}

console.log(powerOf(3));
console.log(powerOf(4));

console.log();
console.log('+++++++++++++++++++++++Mathe 2++++++++++++++++++++++++');
console.log();

// 2

const vowelCount = (article) => {
    let count = 0;
    for(let i = 0; i < article.length; i++){
        const letter = article[i].toLowerCase();
        if(letter === 'a' ||
           letter === 'e' ||
           letter === 'i' ||
           letter === 'o' ||
           letter === 'u'){
               count ++;
           }
    }
    return count;
}
  
console.log(vowelCount('hello'));
console.log(vowelCount('test'));
console.log(vowelCount('fbw'));
  

  
  




// DO NOT EDIT below this line - This will result in an automatic fail
// ÄNDERE NICHTS unterhalb dieser Zeile - Sonst schlägt der automatische Test fehl
module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};