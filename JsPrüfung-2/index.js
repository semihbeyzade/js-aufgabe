// Answer Sheet - all answers should go here 
// Abgabe Datei - Alle Lösungen müssen hier stehen.

/* 
except for A-1 and C, you will always write a function that returns values
Mit Ausnahme von A-1 und C, sollen immer Funktionen mit Rückgabewerten geschrieben werden.
*/

/* A-1 (5)
define and fill an object
Definiere und fülle ein Objekt */
const profileData = {
    name:'Semih',
    surname:'Örscelik',
    age: 28,
    city:'Düsseldorf'
};

/* A-2 (5) */
const convertObjectToArray = (obj) => {
    let result = Object.keys(obj).map((key) => [Number(key), obj[key]]);

    return result;
}
let example = {
    "1": 10, 
    "2": 20, 
    "3": 30
}

console.log(convertObjectToArray(example));

/* B-1 (10) */
const convertArrayData = (arr) => {
    newArr = [arr[1], arr[0], 'milk']
    return newArr
 
}
let beverages = ["coffee", "tea", "juice"];
console.log(convertArrayData(beverages));

/* B-2 (15) */
const convertArraysToObject = (arr1,arr2) => {
  let  result = arr1.reduce((o, k, i) => ({...o, [k]: arr2[i]}), {});
  return result;
};

let cities = ["Berlin", "Hamburg", "Munich", "Stuttgart", "Duesseldorf"];

let areas = ["891.68 km2", "755.3 km2", "310.7 km2", "207.35 km2", "217.41 km2"];

console.log(convertArraysToObject(cities,areas));

/* B-3 (10) */
const createGrid = (size, char) => {
	const arr = [];
	for (let i = 1; i <= size; i++) {
		const arr2 = [];
		for (let j = 1; j <= size; j++) {
			arr2.push(char);
		}
		arr.push(arr2);
	}
	return arr;
};

console.log(createGrid(3, "*"));

/* B-4 (10) */
const wordConverter = (arr,str) => {
    return arr.map(key => key + str)
}

let adjectives = ["smart", "kind", "sweet", "small", "clear"];
console.log(wordConverter(adjectives, "er"));

/* B-5 (10) */
const calculateHours = arr => {
   return arr.reduce((acc,obj) => {
       acc += obj.end - obj.start;
       return acc;
   },0)

};

const hourTracking = [
    { day: 'Monday', start: 8, end: 17},
    { day: 'Tuesday', start: 9, end: 15},
    { day: 'Wednesday', start: 10, end: 18},
    { day: 'Thursday', start: 7, end: 14},
    { day: 'Friday', start: 6, end: 12},
];

console.log(calculateHours(hourTracking));

/* C (10) 
write a class
schreibe eine Klasse */
class Course {
	constructor(teacher, type, number) {
		this.teacher = teacher;
		this.type = type;
		this.number = number;
	}
	spaceNeeded() {
		return `The classroom should be ${this.number * 2}m².`;
	}
	details() {
		return `This is a ${this.type} course taught by ${this.teacher}. There are ${this.number} students taking the course.`;
	}
}
const course = new Course('Brent', 'Web Development', 21);
console.log(course.spaceNeeded()); 
console.log(course.details());


/* D-1 (10) */
const capitalizeFirstLetter = (str) => {
	str = str.toString();
	const words = str.split(' ');
	const newWords = words.map(word => {
		return word.charAt(0).toUpperCase() + word.slice(1);
	});
	return newWords.join(' ');
    
};

console.log(capitalizeFirstLetter("hey there"));
console.log(capitalizeFirstLetter(true));



/* D-2 (15) */
const validPin = (pin) => {
 
    const arr = pin.split("");
      const sum = arr.reduce((acc, m) => acc + Number(m), 0);
      if (
        arr.length === 4 &&
        arr[3] % 2 === 0 &&
        sum >= 5 &&
        (arr[0] !== arr[1] || arr[0] !== arr[2] || arr[0] !== arr[3])
      ) {
        return true;
      } else {
        return false;
      }
    };

    console.log(validPin("1234"));
    console.log(validPin("1235"));
    console.log(validPin("wwww"));
    console.log(validPin("12345"));
    console.log(validPin("2222"));
    console.log(validPin("1000"));
    console.log(validPin("2224"));


// Do not edit or answer below this line
// Bearbeite die letzte Zeile nicht. Das wird vom Unit-Test gebraucht
// EDITING MODULE EXPORTS WILL RESULT IN AN AUTOMATIC FAIL
module.exports = {profileData, convertObjectToArray, convertArrayData, convertArraysToObject, createGrid, wordConverter, calculateHours, Course, capitalizeFirstLetter, validPin};
