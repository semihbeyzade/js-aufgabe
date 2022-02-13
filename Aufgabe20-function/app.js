function uppercase(str){
    const worte = str.split(" ");
    let returnable = "";

    for(let i = 0; i < worte.length; i++){
        const wort = worte[i]
        let neuesWort = wort.substr(0,1).toUpperCase() + wort.substr(1);
        returnable += neuesWort + " ";
    }
    return returnable;
}

console.log(uppercase("the quick brown fox"));

// 2

function findLongestWord(str){
    const worte = str.split(" ");
    let longestWord = "";
    for (let i = 0; i < worte.length; i++){
        if(worte[i].length > longestWord.length){
            longestWord = worte[i];
        }
    }
    return longestWord;
}

console.log(findLongestWord("Web Development Tutorial"));