// The Fortune Teller

const tellFortune = (N, Z, Y, X) => {
  return `You will be a ${N} in ${Z} and married to ${Y} with ${X} kids.`
  
}
console.log(tellFortune('Actor', 'New York', 'Rihanna', 2));
console.log(tellFortune('Hausfrau', 'Dubai', 'Salah', 5));



// The Puppy Age Calculator

const calculateDogAge = (years,rate = 7) => {
 return `Your doggie is ${years * rate} years old in dog years!`
   
}
console.log(calculateDogAge(21));
console.log(calculateDogAge(8));
console.log(calculateDogAge(12));




// The Lifetime Supply Calculator

const calculateSupply = (alter, zahlVonSnack) => {
  // durchschnittliche alter von Männer : 78,5(79)
  let durchschnittlicheAlter = 100;
 return `You will need ${Math.ceil((durchschnittlicheAlter - alter) * zahlVonSnack * 365)} snacks to last you until the ripe old age of ${durchschnittlicheAlter}`
}

console.log(calculateSupply(99,1));
console.log(calculateSupply(20,5));


// The Geometrizer

const calcCircumfrence = (radius) => {
 let umfangVonCircum = (2 * Math.PI* radius).toFixed(2);
 return `The circumference is ${umfangVonCircum}`
}

console.log(calcCircumfrence(5));

const calcArea = (radius2) => {
  let flaecheVonCircum = (Math.PI * (radius2 ** 2)).toFixed(2);
  return `The area is ${flaecheVonCircum}`
}

console.log(calcArea(3));

// The Temperature Converter

const celsiusToFahrenheit = (temperaturAlsCelcius) => {
   let zumFahrenheitUmwandel = Math.round((temperaturAlsCelcius * 1.8) + 32);
   return `${temperaturAlsCelcius}°C is ${zumFahrenheitUmwandel}°F`
}
console.log(celsiusToFahrenheit(25));


const fahrenheitToCelsius = (temperaturAlsFahrenheit) => {
  let zumCelsiusUmwandel = Math.round((temperaturAlsFahrenheit - 32) * (5 / 9));
  return `${temperaturAlsFahrenheit}°F is ${zumCelsiusUmwandel}°C`
}
console.log(fahrenheitToCelsius(25));


//Entferne nicht die nächste Zeile!
module.exports =  { tellFortune, calculateDogAge, calculateSupply, calcCircumfrence, calcArea, celsiusToFahrenheit,fahrenheitToCelsius }