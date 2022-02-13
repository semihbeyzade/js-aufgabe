// 1
function begrüß(name){
    return `Hallo ${name}`
}

let a = begrüß("Semih")
console.log(a);

// 2
function hello(age,jahr){
    console.log(`ich bin ${age} Jahre alt und ${jahr} geboren.`)
    return
}

hello(29,1993)
hello(18,2004)
hello()

// 3
function adresse(wohnort,postleitzahl){
    return `ich wohne ${wohnort} und meine Postleitzahl ist ${postleitzahl}`
}

let b = adresse("Düsseldorf", 58741)
console.log(b);
