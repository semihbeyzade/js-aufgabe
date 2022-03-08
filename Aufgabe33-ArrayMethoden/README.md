# Arrays 

In dieser Aufabge gibe es automatische Tests. Wenn du diese ausführen möchtest muss du folgendes machen:
- `npm install` einmal ausführen
Um die Tests auszuführen: 
- `npm run test` auf der Kommandozeile ausführen..
Arbeite in der **index.js* Datei, die schon erstellt ist.


### 1. Wo sind meine Wörter mit vier Buchstaben hin?

Erstellen Sie eine Funktion, die ein Array von Zeichenketten annimmt. Gib alle Wörter im Array zurück, die aus genau vier Buchstaben bestehen.

Beispiele:
 ``` js
 isFourLetters(["John", "James", "Jack", "Jeanne"]) ➞ ["John", "Jack"]
 isFourLetters(["Tomate", "Mais", "Kopfsalat"]) ➞ ["Mais"]
 isFourLetters(["Hund", "Katze", "Reh"]) ➞ ["Reh"]
``` 
### 2. Monate

Erstellen Sie eine Funktion, die eine Zahl (von 1 bis 12) annimmt und den entsprechenden Monatsnamen als String zurückgibt.

Beispiele:

``` js
 getMonthName(3) ➞ "March"
 getMonthName(12) ➞ "December"
 getMonthName(6) ➞ "June"
```
### 3. Verstärken Sie die Vielfachen von 4


Erstellen Sie eine Funktion, die eine ganze Zahl annimmt und ein Array von ganzen Zahlen zurückgibt, die von 1 bis zur angegebenen Zahl aufsteigen, wobei:

* Für jede Zahl im Array, die gleichmäßig durch 4 geteilt werden kann, wird diese Zahl um 10 multipliziert (d.h. es wird das 10-fache der Zahl zurückgegeben).
* Wenn die Zahl nicht gleichmäßig durch 4 teilbar ist, wird einfach die Zahl zurückgegeben.
* Die angegebene ganze Zahl ist immer gleich oder größer als 1.
* Die angegebene Zahl (die Zahl in den Parametern) einbeziehen.

Beispiele:
``` js
* amplify(4) ➞ [1, 2, 3, 40]
* amplify(3) ➞ [1, 2, 3]
* amplify(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]
```

### 4. Eine ist nicht wie die anderen...


Erstelle eine Funktion, die ein Array von Zahlen annimmt und die Zahl zurückgibt, die nur einmal in dem Array vorkommt.

Beispiele:
``` js
* unique([3, 3, 3, 7, 3, 3]) ➞ 7
* unique([0, 0, 0.77, 0, 0]) ➞ 0.77
* unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0
```

### 5. Wort-Ranking


Erstelle eine Funktion, die eine Reihe von Wörtern annimmt und das Wort mit der höchsten Punktzahl zurückgibt. Jeder Buchstabe eines Wortes erhält Punkte entsprechend seiner Position im Alphabet: a = 1, b = 2, c = 3, usw.
* Die zurückgegebene Zeichenkette sollte nur alphabetische Zeichen (a-z) enthalten.
* **Bonus:** Die Groß- und Kleinschreibung in der zurückgegebenen Zeichenkette muss beachtet werden (siehe 4. Beispiel unten).

Beispiele:
``` js
 wordRank("The quick brown fox.") ➞ "braun"
 wordRank("Nancy ist sehr hübsch.") ➞ "hübsch"
 wordRank("Schau morgen wieder vorbei, Mann!") ➞ "morgen"
 wordRank("Heute ist Mittwoch.") ➞ "Mittwoch"
```

### 6. c4n y0u r34d th15?

Erstellen Sie eine Funktion, die eine Zeichenkette als Argument nimmt und eine kodierte (h4ck3r 5p34k) Version der Zeichenkette zurückgibt. **NB:** Damit Ihr Programm richtig funktioniert, sollte die Funktion alle 'a's durch 4, 'e's durch 3, 'i's durch 1, 'o's durch 0 und 's's durch 5 ersetzen.

Beispiele:
``` js
 hackerSpeak("javascript ist cool") ➞ "j4v45cr1pt 15 c00l"
 hackerSpeak("Programmieren macht Spaß") ➞ "pr0gr4mm1ng 15 fun"
 hackerSpeak("Werde ein Programmierer") ➞ "b3c0m3 4 c0d3r"
```
## Bonusfragen

### 1. Ist es symmetrisch? 

Erstellen Sie eine Funktion, die eine Zahl als Argument nimmt und true oder false zurückgibt, je nachdem, ob die Zahl symmetrisch ist oder nicht. **NB:** Eine Zahl ist symmetrisch, wenn sie genau so groß ist wie ihr Gegenteil.

Beispiele:
```js
 isSymmetrical(7227) ➞ true
 isSymmetrical(12567) ➞ falsch
 isSymmetrical(44444444) ➞ true
 isSymmetrical(9939) ➞ false
 isSymmetrical(1112111) ➞ true
```
### 2. snake_case ➞ camelCase

Erstellen Sie eine Funktion `toCamelCase()`, die eine einzelne Zeichenkette in `snake_case` in `camelCase` umwandelt. 

Beispiele:

```js
 toCamelCase("hello_world") ➞ "helloWorld"
 toCamelCase("javascript_is_fun") ➞ "javascriptIsFun"
``` 
### 3. Schweinelatein-Übersetzung

Erstellen Sie eine Funktion, die eine Zeichenkette von Wörtern nimmt und den ersten Buchstaben jedes Wortes an das Ende der Zeichenkette verschiebt und dann "ay" an das Ende des Wortes anfügt. Dies ist eine Grundform von "Schweinelatein". 

* Den ersten Buchstaben eines jeden Wortes an das Ende des Wortes verschieben.
* Hinzufügen von "ay" am Ende des Wortes.
* Wörter, die mit einem Vokal beginnen (A, E, I, O, U), werden stattdessen mit "way" angehängt.

** Bonus: **
* Behalten Sie die korrekte Großschreibung bei, wie in den folgenden Beispielen.

Beispiele:
``` js
* pigLatin("Cats are great pets.") ➞ "Atscay areway reatgay etspay."
* pigLatin("Tom got a small piece of pie.") ➞ "Omtay otgay away allsmay iecepay ofway iepay."
* pigLatin("He told us a very exciting tale.") ➞ "Ehay oldtay usway away eryvay excitingway aletay."
``` 
---

#### Work from the `index.js` file provided in this repository.

**1. Where Have My Four Letter Words Gone?**
Create a function that takes an array of strings. Return all words in the array that are exactly four letters.

Examples:
 
* isFourLetters(["John", "James", "Jack", "Jeanne"]) ➞ ["John", "Jack"]
* isFourLetters(["Tomato", "Corn", "Lettuce"]) ➞ ["Corn"]
* isFourLetters(["Dog", "Cat", "Deer"]) ➞ ["Deer"]

**2. Months.**
Create a function that takes a number (from 1 to 12) and return its corresponding month name as a string.

Examples:
* monthName(3) ➞ "March"
* monthName(12) ➞ "December"
* monthName(6) ➞ "June"

**3. Amplify the Multiples of 4.**
Create a function that takes an integer and returns an array of integers ascending from 1 to the given number, where:

* For each number in the array that can be evenly divided by 4, that number is amplified by 10 (i.e. return 10 times the number).
* If the number cannot be divided evenly by 4, simply return the number.
* The given integer will always be equal to or greater than 1.
* Include the given number (the number in the parameters).

Examples:
* amplify(4) ➞ [1, 2, 3, 40]
* amplify(3) ➞ [1, 2, 3]
* amplify(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]

**4. One is not like the others...**
Create a function that takes an array of numbers and return the number that's unique.

Examples:
* unique([3, 3, 3, 7, 3, 3]) ➞ 7
* unique([0, 0, 0.77, 0, 0]) ➞ 0.77
* unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0

**5. Word Ranking.**
Create a function that takes a string of words and returns the highest scoring word. Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3, etc.
* The returned string should only contain alphabetic characters (a-z).
* Preserve case in the returned string (see 4th example above).

Examples:
* wordRank("The quick brown fox.") ➞ "brown"
* wordRank("Nancy is very pretty.") ➞ "pretty"
* wordRank("Check back tomorrow, man!") ➞ "tomorrow"
* wordRank("Today is Wednesday.") ➞ "Wednesday"

**6. c4n y0u r34d th15?**
Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string. **NB:** for your program to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.

Examples:
* hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"
* hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"
* hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"

## Bonus Questions

**1. Is it Symmetrical?**
Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not. **NB:** A number is symmetrical when it is the same as its reverse.

Examples:
* isSymmetrical(7227) ➞ true
* isSymmetrical(12567) ➞ false
* isSymmetrical(44444444) ➞ true
* isSymmetrical(9939) ➞ false
* isSymmetrical(1112111) ➞ true

**2. snake_case ➞ camelCase**
Create a function toCamelCase() that takes a single string in `snake_case` and converts it into `camelCase`. 

Examples:
* toCamelCase("hello_world") ➞ "helloWorld"
* toCamelCase("javascript_is_fun") ➞ "javascriptIsFun"

**3. Pig Latin Translation.** 
Create a function that takes a string of words and moves the first letter of each word to the end of it, then adds 'ay' to the end of the word. This is a basic form of "Pig Latin". 

* Move the first letter of each word to the end of the word.
* Add "ay" to the end of the word.
* Words starting with a vowel (A, E, I, O, U) append "way" to the end instead.

**Extra Practice**
* Preserve proper capitalization as in the examples below.

Examples:
* pigLatin("Cats are great pets.") ➞ "Atscay areway reatgay etspay."
* pigLatin("Tom got a small piece of pie.") ➞ "Omtay otgay away allsmay iecepay ofway iepay."
* pigLatin("He told us a very exciting tale.") ➞ "Ehay oldtay usway away eryvay excitingway aletay."
<<<<<<< HEAD
=======
>>>>>>> newMain
[//]: # (autograding info start)
## Results
  [![Results badge](../../blob/badges/.github/badges/main/badge.svg)](https://github.com/D04-1/pb-data-28-02-22-arrays-pt3-semihbeyzade/actions)
  
  [Results Details](https://github.com/D04-1/pb-data-28-02-22-arrays-pt3-semihbeyzade/actions)
  
  ### Debugging your code
  > [reading the test outputs](https://github.com/DCI-EdTech/autograding-setup/wiki/Reading-test-outputs)
  
  There are two ways to see why tasks might not be completed:
  #### 1. Running tests locally
  - Run `npm install`
  - Run `npm test` in the terminal. You will see where your solution differs from the expected result.
  
  #### 2. Inspecting the test output on GitHub
  - Go to the [Actions tab of your exercise repo](https://github.com/D04-1/pb-data-28-02-22-arrays-pt3-semihbeyzade/actions)
  - You will see a list of the test runs. Click on the topmost one.
  - Click on 'Autograding'
  - Expand the item 'Run DCI-EdTech/autograding-action@main'
  - Here you see all outputs from the test run
[//]: # (autograding info end)