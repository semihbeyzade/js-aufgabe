// 1 

let essen = ["banana", "cucumber", "bread", "cakes", "pizza"]
let [obst,gemüse, ...lebensmittel] = essen
console.log('obst', obst);
console.log('gemüse', gemüse);
console.log('lebensmittel', lebensmittel);

// 2

let kostüm = {
    michael: 'cowboy',
    alex: 'spidermann',
    jake: 'batman'
}
let {michael} = kostüm
console.log(michael);
let {alex} = kostüm
console.log(alex);
console.log(kostüm.jake);

// 3


function musician(obj){
    return `${obj.name} ist der großter Band auf der Welt. Ihre beliebste Song ist ${obj.groessterHit} und sie sind ${obj.Nationalitaet}.`
}

console.log(musician({
    name: 'The Beatles',
    groessterHit: 'Let it Be',
    Nationalitaet: 'Irisch'
}));



