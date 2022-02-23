# Übungen zu Funktionen

Schreibe deine Antworten und Ergebnisse auf die Konsole.

## 1. Aufsummieren

Erstelle eine Funktion die eine ganze Zahl bekommen soll.
Addiere alle ganzen Zahlen von der 1 bis zu der Zahl, die als Parameter an die Funktion übergeben wurde.

Beispiel:
Wenn die Funktion mit 4 aufgerufen wird, soll sie 10 ausgeben. Denn 1 + 2 + 3 + 4 = 10.

* aufsummieren(4) -> 10
* aufsummieren(13) -> 91
* aufsummieren(600) -> 180300


## 2. Kubikwerte

Als Kubikwert bezeichnet man die 3. Potenz einer Zahl. Für einen Würfel mit der Seitenlänge x stellt der Kubikwert das Volumen (Körperinhalt) des Würfels dar.

z.B. ein Würfel mit der Seitenlänge 10cm ist das Volumen: 
10cm * 10cm * 10cm = 1000 cm³
Diesen Wert nennen wir bei Flüssigkeiten auch 1 Liter (Wasser/Milch/Brause).

Schreibe eine Funktion, die _bis zu_ drei ganze Zahlen bekommen kann. Sie soll die Summe aller Kubikwerte für die übergebenen Zahlen ausgeben.

Beispiele:

* Kubiksumme(1,5,9) => 855 // denn: 1 ^ 3 + 5 ^ 3 + 9 ^ 3 = 1 + 125 + 729 = 855
* Kubiksumme(5,2) = > 133 // denn: 5 ^ 3 + 2 ^ 3 = 125 + 8 = 133
* Kubiksumme(2) => 8 // 2 ^ 3
* Kubiksumme() => 0

## 3. Zeichenketten am Anfang prüfen

Schreibe eine Funktion, die zwei Zeichenketten bekommen kann.
Wenn der Wert der zweiten Zeichenkette mit dem Wert der ersten Zeichenkette beginnt, dann soll die Funktion true zurück geben.

Beispiele: 
* beginntMit("Bu", "Buch") => true
* beginntMit("Tri", "Triceratops") => true
* beginntMit("Ende", "noch nicht am Ende") => false

**Bonus für Schnelle**
Mach die Funktion tolerant gegenüber verschiedenen Schreibweisen (große/kleine Buchstaben), damit auch gilt:

* beginntMit("boo", "Boomerang") => true

## 4. Kleinergleich 0?

Schreib eine Funktion, die eine Zahl bekommen kann. Für negative Zahlen und für die 0 gib true zurück, sonst false.

Beispiele: 
* istKleinerGleich0(3) => false
* istKleinerGleich0(0) => true
* istKleinerGleich0(-4) => true
* istKleinerGleich0(10) => false


## 5. Vorkommen zählen.
Schreibe eine Funktion, die eine Zeichenkette und **ein einzelnes Zeichen** (so könnt ihr mit kette[index] prüfen und müsst keine String-Methoden benutzen) bekommen kann.
Die Funktion soll ausgeben, wie oft das Zeichen in der Zeichenkette vorkommt.

Beispiel:
* wievieleZeichen("in dieser Zeichenkette","i") => 3


## 6. X hoch X
Erstelle eine Funktion, die einen Wert (z.B. x) nimmt, der beim potenzieren sowohl für Basis und Exponent benutzt wird.
Die Rückgabe ist also x ^ x (x hoch x).

Beispiele:
* xHochX(5) => 3125
* xHochX(10) => 10000000000
* xHochX(3) => 27

**Nebenbedingung:** Du brauchst nur von positiven ganzen Zahlen auszugehen. Argumente kleiner als Null kannst du aber gern probieren.


## 7. Finde Walter
Schreibe eine Funktion, die eine Zeichenkette nimmt und true zurück gibt, wenn darin Walter gefunden werden kann. false wenn nicht.

Beispiele:
 * istWalterHier("Ist Walli hier?") => false
 * istWalterHier("Ich habe Walter gefunden!") => true
 * istWalterHier("Ist Walther hier?") => false
 * istWalterHier("Walter ist hier!") => true


## 8. X und O
 Schreibe eine Funktion, die eine Zeichenkette nimmt.
 Prüfe, ob die Zeichenkette die gleiche Anzahl von `x` und `o` enthält

Hinweise:
    * Gib true oder false zurück
    * die Zeichenkette kann alles enthalten
    * wenn weder x noch o drin sind, ist die anzahl auch gleich (true)

Beispiele:
    * gleichVielXUndO("ooxx") ➞ true
    * gleichVielXUndO("xooxx") ➞ false
    * gleichVielXUndO("ooxXm") ➞ true (Schreibweise egal)
    * gleichVielXUndO("zpzpzpp") ➞ true (true: weder x noch o)
    * gleichVielXUndO("zzoo") ➞ false

## 9. Primzahl?
Eine Primzahl ist nur duch  die Zahl 1 und sich selbst teilbar.
Durch andere Zahlen kann sie nicht ohne Rest dividiert werden.
Die ersten Primzahlen sind: 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29

Schreibe eine Funktion, die eine Zahl nimmt und true zurück gibt, wenn es eine Primzahl ist.

Examples:
* istPrimzahl(7) ➞ true (nur durch 1 und 7 teilbar)
* istPrimzahl(9) ➞ false (durch 1, 3 und 9 teilbar)
* istPrimzahl(10) ➞ false (durch 1, 2, 5 und 10 teilbar)

**Hinweis** Halte es einfach. Prüfe einfach für alle Zahlen, die kleiner oder gleich die Hälfte der Zahl sind, ob es einen Divisionsrest mit der Eingabe gibt.
```
  für alle Zahlen i, die kleiner oder gleich sind als die halbe Zahl im Parameter: 
    (Eingabe % i != 0 )
```

---


# Functions Exercises

Print your answers to the console.

**1. Add Up.**
Create a function that takes an integer as an argument. Add up all the integers from 1 to the integer you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

Examples:
* sumIntFrom1ToN(4) ➞ 10
* sumIntFrom1ToN(13) ➞ 91
* sumIntFrom1ToN(600) ➞ 180300

**2. Cubed.**
Create a function that takes in three numbers and returns the sum of its cubes.

Examples:
* sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
* sumOfCubes(2) ➞ 8
* sumOfCubes() ➞ 0

**3. String Check.**
Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.


Examples:
* isStrStartOfWord("bu", "button") ➞ true
* isStrStartOfWord("tri", "triplet") ➞ true
* isStrStartOfWord("beau", "pastry") ➞ false

**4. Less Than or Equal to Zero?**
Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

Examples:
* isLEQZero(3) ➞ false
* isLEQZero(0) ➞ true
* isLEQZero(-4) ➞ true
* isLEQZero(10) ➞ false

**5. Count Occurrences.**
Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.

Example:
* countOccurrences("this is a string", "i") ➞ 3

**6. X To The Power of X.**
Create a function that takes a base number and an exponent number and returns the calculation.
Examples:
* calcBaseToExponent(5, 5) ➞ 3125
* calcBaseToExponent(10, 10) ➞ 10000000000
* calcBaseToExponent(3, 3) ➞ 27


**7. Where's Waldo?**
Create a function that takes a string and returns true if Waldo is found, and false if he's not.

Examples:
* isWaldoHere("is there a wal here?") ➞ false
* isWaldoHere("I found you Waldo!") ➞ true
* isWaldoHere("Wait, don't you mean Wally?") ➞ false
* isWaldoHere("waldo is here") ➞ true


**8. XO**
Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.

Notes:

* Return a boolean value (true or false).
* The string can contain any character.
* When neither an x nor an o is in the string, return true.

Examples:
* isEqualNumXandOs("ooxx") ➞ true
* isEqualNumXandOs("xooxx") ➞ false
* isEqualNumXandOs("ooxXm") ➞ true (case insensitive)
* isEqualNumXandOs("zpzpzpp") ➞ true (returns true if no x and o)
* isEqualNumXandOs("zzoo") ➞ false

**9. isPrime?**
Create a function that returns true if a number is a prime number, and false if it's not. **NB:** a prime number is any positive integer *greater than 1*, which is *only evenly divisible by two divisors: itself and 1*. The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.

Examples:
* isPrime(7) ➞ true
* isPrime(9) ➞ false
* isPrime(10) ➞ false

**Good Luck & Enjoy :)**

