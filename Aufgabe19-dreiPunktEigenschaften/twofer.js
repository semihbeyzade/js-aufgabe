// Complete the function below so that it returns "Two for me and one for you" when no arguments are passed

const twofer = (who = "you" ) => {
 return `Two for me and one for ${who}`;
};

console.log(twofer("Fran")) 
console.log(twofer()) 