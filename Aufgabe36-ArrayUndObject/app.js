// 1

let board = [
    [1, 2, 3],
    ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
    [true, false]
  ];

  for(let key of board){
      console.log(key);
  }

// 2

let hunde = {
    name: 'Misha',
    rasse: 'Golden Retriever',
    lieblingsessen: ['Lachs', 'Karotten', 'Käse', 'Hähnchen'],
    ausgabeVonLieblingsEssen: function(){
        return this.lieblingsessen.map(e => {
            console.log(`Lieblingsessen sind: ${e}`);
        })
    }
}

console.log(hunde.lieblingsessen[1]);
console.log(hunde.ausgabeVonLieblingsEssen());


// 3

let rezept = {
    zutaten: {
        zutat1: 'butter',
        zutat2: 'zucker',
        zutat3: 'mehl'
    }
}

rezept.zutaten.zutat3 = "Ingwer";

rezept.zutaten.zutat2 = "Brauner Zucker"

for(let key in rezept){
    console.log(rezept[key]);
}