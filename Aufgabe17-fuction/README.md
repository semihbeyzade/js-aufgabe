# Allgemeine Übungen

1. Schreibe eine Funktion, die einen Parameter nimmt und diesen Parameter dreimal auf  die Konsole ausgibt.

2. Schreibe eine Funktion, die einen Parameter nimmt und diesen Parameter fünfmal wiederholt zurückgibt. Für die Eingabe "Katze" würde sie "KatzeKatzeKatzeKatze" zurückgeben.

3. Schreibe eine Funktion, die zwei Parameter nimmt, wobei der erste eine Zahl und der zweite eine Zeichenkette sein sollte. Die Funktion gibt das 2. Argument so oft zurück, wie das 1. Argument definiert ist. Für die Eingaben `3` und "Woah" soll sie `WoahWoahWoah` zurückgeben

4. Schreibe eine Funktion, die eine Array mit Zahlen als Parameter nimmt. Sie soll die größte Zahl im Array zurückgeben. Für die Eingabe `[1,6,83,91,0,-4,1337,5]` soll sie `1337` zurückgeben.

5. Diese Frage hat 2 Teile

    Teil a) Schreibe eine Funktion, die eine Zahl als Parameter nimmt und `console.log("Gerade 10!")` ausgibt, wenn die Zahl gerade durch 10 teilbar ist. Beispiele:

    -  printIfDivisibleByTen(1) --> no output
    -  printIfDivisibleByTen(2) --> no output
    -  printIfDivisibleByTen(32) --> no output
    -  printIfDivisibleByTen(10) --> "Even 10!" into the console
    -  printIfDivisibleByTen(30) --> "Even 10!" into the console
    -  printIfDivisibleByTen(90000) --> "Even 10!" into the console


    Teil b) Schreibe eine for-Schleife (außerhalb der Funktion), die 125 Mal durchläuft und dabei jedes Mal die in Teil a erstellte Funktion mit der aktuellen Iterationsnummer aufruft.

6. Schreibe eine Pfeilfunktion, die 5 Zahlen als Parameter nimmt und die größte Zahl zurückgibt.

7. Schreibe eine Pfeilfunktion, die einen Parameter nimmt und true zurückgibt, wenn dieser Parameter eine Zeichenkette ist.

8. Schreibe eine Pfeilfunktion, die zwei Parameter nimmt und `true` zurückgibt, wenn beide eine Zeichenkette sind.

9. Schreibe eine Pfeilfunktion, die eine Zeichenkette nimmt. Die Funktion soll das erste Wort der Zeichenkette zurückgeben, die ihr übergeben wurde. Beispiele:
    - getFirstWord("Internetting is hard") --> "Internetting"
    - getFirstWord("Hello World") --> "Hello"
    - getFirstWord("Hello") --> "Hello"
   
10. *Schwierig* Schreibe eine Pfeilfunktion, die eine Zeichenkette als Paramter nimmt.
Die Funktion soll eine neue Zeichenkette zurückgeben, bei der jedes Wort der Zeichenkette um die Anzahl der Wörter der Zeichenkette wiederholt wird. Beispiele:
    - wordRepeater("bunny") --> "bunny"
    - wordRepeater("Cat food") --> "Cat Cat food food"
    - wordRepeater("I am groot") --> "I I I am am am groot groot groot"
    - wordRepeater("O M G ?") --> "O O O O M M M M G G G ? ? ? ?"

11. Schreibe eine kurze (einzeilige) Pfeilfunktion, die eine Zeichenkette nimmt und das erste Zeichen dieser Zeichenkette zurückgibt. Beispiele:
    - firstLetter("cat") --> "c"
    - firstLetter("quylthulg") --> "q"


12. Schreibe eine Pfeilfunktion, die eine Zeichenkette nimmt und eine neue Zeichenkette zurückgibt. Die neue Zeichenkette muss aus dem ersten Buchstaben jedes Wortes in der Eingabe gebildet werden. Beispiele:
    - firstLetters("cat") --> "c"
    - firstLetters("What the fruit") --> "Wtf"
    - firstLetters("MongoDB Express Node React") --> "MERN"
    - firstLetters("What You See Is What You Get") --> "WYSIWYG"

13. Schreibe eine Pfeilfunktion, die eine mit einer Variable als Argument gerufen wird (ein Parameter nimmt). Wenn diese Variable eine Zeichenkette ist, gibt sie die Länge der Zeichenkette zurück. Wenn die Variable ein Array ist, gibt sie die Länge des Arrays zurück. Wenn es sich um etwas anderes handelt, wird `null` zurückgegeben. Du musst vielleicht in Google suchen, um herauszufinden, wie du feststellen kannst, ob der Parameter ein Array ist - aber es gibt auch andere Möglichkeiten, dieses Problem zu lösen!

14. Schreibe eine Pfeilfunktion, die eine Variable aufnimmt. Wenn die Variable kein String ist, gib null zurück. Wenn es eine Zeichenkette ist, gib ein Array zurück, in dem jedes Zeichen der Zeichenkette in einem einzelnen Array-Eintrag enthalten ist. Beispiele:
    - explode("Cat") --> ["C", "a", "t"]
    - explode(41) --> null
    - explode("") --> []
    - explode("R & D") --> ["R", " ", "&", " ", "D"]

15. Reverse Engineering Herausforderung 1. Schreibe eine Funktion, die dies tut (*BONUS*: schreibe sie als kurze (einzeilige) Pfeilfunktion):
    - foo("") -> false
    - foo("a") -> false
    - foo("o") -> true
    - foo("Cat") -> false
    - foo("Tomato") -> true
    - foo("Potato") -> true
    - foo("Blanket") -> false
    - foo("1") -> false

16. Reverse-Engineering-Aufgabe 2. Schreibe eine Funktion, die dies tut (*BONUS*: schreibe sie als kurze (einzeilige) Pfeilfunktion):
    - bar("") --> "Cat"
    - bar("x") --> "Cat"
    - bar("Cat") --> "Catt"
    - bar("Foobar") --> "Catobar"
    - bar("Potato") --> "Cattato"
    - bar("Tomato") --> "Catmato"
    - bar("International Space Station") --> "Catternational Space Station"


---

# General exercises

1. Write a function that takes in one parameter and logs that parameter 3 times into the console.

2. Write a function that takes in one parameter and returns that parameter repeated five times. For the input "Cat" it would return "CatCatCatCatCat"

3. Write a function that takes in two parameters, the first one should be a number and the 2nd one should be a string. The functions returns the 2nd argument repeated as many times as the 1st argument defins. For the inputs `3` and "Woah" it should return `WoahWoahWoah`

4. Write a function that takes in an array of numbers as a parameter. It should return the largest number in the array. For the input `[1,6,83,91,0,-4,1337,5]` it should return `1337`

5. This question has 2 parts

    Part a) write a function that takes in a number and does a `console.log("Even 10!")` if the number is evenly divisable by 10. Examples:

    -  printIfDivisibleByTen(1) --> no output
    -  printIfDivisibleByTen(2) --> no output
    -  printIfDivisibleByTen(32) --> no output
    -  printIfDivisibleByTen(10) --> "Even 10!" into the console
    -  printIfDivisibleByTen(30) --> "Even 10!" into the console
    -  printIfDivisibleByTen(90000) --> "Even 10!" into the console

    Part b) write a for-loop that runs 125 times, each time calling the function you created in part a with the current iteration number.

6. Write an arrow function that takes in 5 numbers as its parameters and returns the largest one

7. Write an arrow function that takes in one parameter and returns true if that parameter is a string.

8. Write an arrow function that takes in two parameters and returns true if both of them are strings.

9. Write an arrow function that takes in one string. The function should return the first word in the string that was given to it. Examples:
    - getFirstWord("Internetting is hard") --> "Internetting"
    - getFirstWord("Hello World") --> "Hello"
    - getFirstWord("Hello") --> "Hello"

10. *HARD* Write an arrow function that takes in one string.
The function should return a new string that where each word in the input string is repeated by the amount of words in the input string. Examples:
    - wordRepeater("bunny") --> "bunny"
    - wordRepeater("Cat food") --> "Cat Cat food food"
    - wordRepeater("I am groot") --> "I I I am am am groot groot groot"
    - wordRepeater("O M G ?") --> "O O O O M M M M G G G ? ? ? ?"

11. Write a short (single line) arrow function that takes in one string and returns the first character of that string. Examples:
    - firstLetter("cat") --> "c"
    - firstLetter("quylthulg") --> "q"

12. Write an arrow function that takes in one string and returns a new string. The new string needs to be made from the first letter of each of the words in the input. Examples:
    - firstLetters("cat") --> "c"
    - firstLetters("What the fruit") --> "Wtf"
    - firstLetters("MongoDB Express Node React") --> "MERN"
    - firstLetters("What You See Is What You Get") --> "WYSIWYG"

13. Write an arrow function that takes in one variable. If that variables is a string, it will return the length of the string. If that variable is an array, it returns the length of the array. If it is something else, it will return null. You might need to search Google to find out how can you identify if the parameter is an array - but there are other ways to solve this too!

14. Write an arrow function that takes in one variable. If the variable is not a string, return null. If it is a string, return an array where each of the characters of that string is in individual array entry. Examples:
    - explode("Cat") --> ["C", "a", "t"]
    - explode(41) --> null
    - explode("") --> []
    - explode("R & D") --> ["R", " ", "&", " ", "D"]

15. Reverse engineering challenge 1. Write a function that does this (*BONUS*: write it as a short (one line) arrow function):
    - foo("") -> false
    - foo("a") -> false
    - foo("o") -> true
    - foo("Cat") -> false
    - foo("Tomato") -> true
    - foo("Potato") -> true
    - foo("Blanket") -> false
    - foo("1") -> false

16. Reverse engineering challenge 2. Write a function that does this (*BONUS*: write it as a short (one line) arrow function):
    - bar("") --> "Cat"
    - bar("x") --> "Cat"
    - bar("Cat") --> "Catt"
    - bar("Foobar") --> "Catobar"
    - bar("Potato") --> "Cattato"
    - bar("Tomato") --> "Catmato"
    - bar("International Space Station") --> "Catternational Space Station"
