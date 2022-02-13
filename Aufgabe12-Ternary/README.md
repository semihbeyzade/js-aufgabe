### Ternärer Operator

* Schreiben Sie dies um, wenn Sie den bedingten Operator '?' verwenden:
```js
    let result;
    let a=3;
    let b=6;
    if (a + b < 4) {
    result = 'Unten';
    } else {
    result = 'Über';
    }

    console.log(result)
``` 
* Schreiben Sie den folgenden Code um, um den ternären Operator (?:) zu verwenden (Sie sollten in der Lage sein, die if-else-Logik in einer Zeile zusammenzufassen).
```js
    let score = 42;
    let msg = "";

    if (score > 1337)
    {
        msg = "Das ist ein neuer Highscore!";
    }
    else
    {
        msg = "Du brauchst mehr Punkte, um den Highscore zu schlagen!";
    }
    console.log(msg)
```

* Umschreiben Sie if..else mit mehreren ternären Operatoren '?'.

    Der Lesbarkeit halber wird empfohlen, den Code in mehrere Zeilen aufzuteilen.
```js
    let message;
    let login="Mitarbeiter"
    if (login == 'Mitarbeiter') {
    message = 'Hallo';
    } else if (login == 'Direktor') {
    message = 'Grüße';
    } else if (login == '') {
    message = 'Keine Anmeldung';
    } else {
    meldung = '';
    }
    console.log(message)
``` 


Übersetzt mit www.DeepL.com/Translator (kostenlose Version)

### Ternary Operator

* Rewrite this if using the conditional operator '?':
```js
    let result;
    let a=3;
    let b=6;
    if (a + b < 4) {
    result = 'Below';
    } else {
    result = 'Over';
    }

    console.log(result)
``` 
* Rewrite the code below to use the ternary operator (?:) (you should be able to condense the if-else logic into one line).
```js
    let score = 42;
    let msg = "";

    if (score > 1337)
    {
        msg = "This is a new highscore!";
    }
    else
    {
        msg = "You need more points to beat the highscore!";
    }
    console.log(msg)
```

* Rewrite if..else using multiple ternary operators '?'.

    For readability, it’s recommended to split the code into multiple lines.
```js
    let message;
    let login="Employee"
    if (login == 'Employee') {
    message = 'Hello';
    } else if (login == 'Director') {
    message = 'Greetings';
    } else if (login == '') {
    message = 'No login';
    } else {
    message = '';
    }
    console.log(message)
``` 
