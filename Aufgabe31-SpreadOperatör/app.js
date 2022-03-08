// 1

let europaeischeLaender =  ['Deutschland', 'Niederland', 'Belgium']
let asiatischeLaender = ['Japan', 'Nepal', 'Vietnam']

laender = [...europaeischeLaender, ...asiatischeLaender]
console.log(laender);

let sprache = ['English', 'Deutsch']
let computerSprache = ['JavaScript', 'C++']

let alleSprachen = [...sprache, ...computerSprache]
console.log(alleSprachen);

// 2

let artVonSport = ['Schwimmen', 'Volleyboll', 'Fussball']
let kopieArtVonSport = [...artVonSport]
console.log(kopieArtVonSport);

// 3
function groessteZahl(arr){
 return   arr.reduce(function(a,b){
        return Math.max(a , b)
    })
    
}

console.log(groessteZahl([1,2,3]));

/*
const findLargestNumber = array => Math.max(...array);
console.log(findLargestNumber([1,2,3]));
*/

// 4

function kleinsteZahl(arr){
    return   arr.reduce(function(a,b){
           return Math.min(a , b)
       })
       
   }
   
   console.log(kleinsteZahl([1,2,3]));

/*
const findSmallestNumber = array => Math.min(...array);
console.log(findSmallestNumber([1,2,3]));
*/

// 5

const person = {Name: "John"}
const job = {Rolle: "Lehrer"}

let clonePerson = {...person}
console.log('clone', clonePerson);

let employee = {...person, ...job}
console.log(employee);

employee.Name = 'Semih'
employee.Rolle = 'Webdeveloper'

console.log('Nach der Änderung:', employee);


// 6

function isWhole(num1,num2,num3,num4){
    if((num1 + num2 + num3 + 
        num4) % 4 === 0){
        console.log(true);
    }else{
        console.log(false);
    }
}

isWhole(1, 2, 3, 4);
isWhole(9, 2, 2, 5);

// Gibt immer false aus!!!
isWhole([1,2,3,4])