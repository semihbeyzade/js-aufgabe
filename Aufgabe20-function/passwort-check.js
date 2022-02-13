/*
Funktion die testet ob ein Passwort sicher genug ist 
Anforderungen:
- mindestens 8 Zeichen
- mindestens 1 zahl
- mindestens 1 groß Buchstabe 
*/

const isPasswordStrongEnough = (password) => {
    if(password.length < 8) return false;

    let hasnumber = false;
    let hasUpperCaseLetter = false;

    for(let i = 0; i < password.length; i++){
        const buchstabe = password[i];
        if(parseInt(buchstabe) != "isNaN")
        hasnumber =true;
        if(typeof buchstabe === 'string' && buchstabe === buchstabe.toUpperCase()
        
        )
        hasUpperCaseLetter = true;
    }

    if(!hasnumber || !hasUpperCaseLetter) return false;
    return true;
}

console.log(isPasswordStrongEnough("passwort"));
console.log(isPasswordStrongEnough("Passwort319"));