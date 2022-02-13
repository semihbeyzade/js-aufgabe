// 1

let europaStädte = ['Paris','London','Valletta','Prague','Rome']
console.log(europaStädte);

// 2

europaStädte[0] = 'Berlin'
console.log(europaStädte);

// 3

länge = europaStädte.length
console.log(länge);

// 4

europaStädte.pop()
console.log(europaStädte);

// 5

europaStädte.push('Budapeste')
console.log(europaStädte);

// 6

europaStädte.splice(1,2)
console.log(europaStädte);

// 7

let asiatischeStädte = ['Mumbai','Peking','Shanghai','Bangkok','Dhaka']
console.log(asiatischeStädte);

// 8

let teilVonStaädte = asiatischeStädte.slice(1,4);
console.log(teilVonStaädte);

// 9

let worldCities = europaStädte.concat(asiatischeStädte)
console.log(worldCities);

// 10

console.log(worldCities.reverse());

// 11

worldCities.splice(3,1, 'Toronto')
console.log(worldCities);

// 12

worldCities.splice(2,0, 'Washington')
console.log(worldCities);

// 13

console.log(worldCities.toString());

// bonus
// 1

function reverse(x){
    return x.split("").reverse().join("");
}

let werte = reverse("Hello World")
console.log(werte)

// Extra Aufgaben
// 1

let gerichte = ['pizza','nudeln','döner','hamburger']

// 2

let eissorten = ['zitrone','strawberry','schokolade','vanille']

// 3

gemischte = gerichte.concat(eissorten)
console.log(gemischte);

// 4

gemischte.push('granapfel')
console.log(gemischte);

// 5

console.log(gemischte.reverse());

// 6

console.log(gemischte.slice(3,4));

// 7

gemischte.splice(1,1, 'melone')
console.log(gemischte);

let a = 'hello'
b = a.split("") // array e dönüstürür
c = b.reverse()
d = c.join("")  // string e dönüstürür
console.log(d); 