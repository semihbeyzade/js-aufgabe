# Test - Programmiergrundlagen

## Test Anweisungen 
* Arbeite von der `index.js` Datei aus, die du mit dem Starter-Code erhalten hast.
* Folge allen Anweisungen unten, um den Test zu absolvieren. 
* **Wichtig**: Verwende die Namen von Variablen und Funktionen wie sie in der Aufgabe vorgegeben sind (auf Englisch).
* Der Test wird automatisch ausgewertet. Das funktioniert nur, wenn die erwarteten Variablen und Funktionsnamen **und Ausgaben** gefunden werden.
* In der Übersetzung schreibe ich in Klammern (de: deutsche Bedeutung) dahinter.
* Seht euch diese Datei nicht als Text-Datei an, sondern auf einer Oberfläche die Markdown interpretiert (GitHub oder die Vorschau in Visual Studio Code). 
* Markdown-Code zur Formatierung **gehört nicht** zu den geforderten Namen von Funktionen und Ergebnissen.

* Alle Funktionen sollen Rückgabewerte haben, vergiss das `return` nicht.
* Gib aber zusätzlich die Lösungen auch auf der Konsole mit `console.log(Funktionsaufruf(Argumente));` aus, um deinen Code zu testen.

* Viel Glück!

### Automatische Tests verwenden: 
Damit die automatischen Tests funktionieren musst du folgendes machen:
1.  Navigiere in dem richtigen  Ordner auf der Kommandozeile: pb-basic-test-de-deinNamen.
2.  Scheibe `npm install` auf der Kommandozeile. 
3.  Dann kannst du die Tests mit `npm run test` so oft ausführen, wie du möchtest. 


### Test beenden

Vergiss nicht am Ende dein Code hochzuladen. 
Auch auf GitHUb kannst du die Ergebnisse von den automatischen Tests sehen. 

## Aufgaben: 

### Bedingte Algorithmen 

#### 1. Los oder New?
* Schreibe eine Funktion "_nameOfCity_" (de: nameEinerStadt), die eine Stadt als Zeichenkette als Argument nimmt.
* Wenn die Kette mit "_Los_" oder "_New_" beginnt, gib den Namen der Stadt zurück.
* Wenn nicht, dann gib "_The city name does not begin with Los or New_" (de: Die Stadt beginnt nicht mit Los oder New) zurück.
* Die Schreibweise (groß/klein) von Buchstaben, soll unwichtig sein (los = Los, new = NEW, u.s.w.), d.h. **Case insensitive**
 
 
##### Beispiel
````javascript
nameOfCity('New York') ➞ 'New York'
nameOfCity('newark') ➞ 'newark'
nameOfCity('London') ➞ 'The city name does not begin with Los or New'
````


#### 2. ist teilbar durch?
* Schreibe eine Funktion "_isDivisible_" (de: istTeilbar), die eine ganze Zahl als Argument nimmt. 
* Wenn die Zahl durch 100 teilbar ist, gib `true` zurück; Wenn nicht, gib `false` zurück.

##### Beispiel
````javascript
isDivisible(1) ➞ false
isDivisible(1000) ➞ true
isDivisible(100) ➞ true
````

#### 3. Der fehlende Winkel
* Schreibe eine Funktion "_missingAngle_" (de: fehlenderWinkel), die zwei Zahlen als Argumente nimmt.
* Die Zahlen sollen zwei bekannte Winkel in einem Dreieck sein.
* Den fehlenden Winkel musst du selbst ausrechnen.
* Für den fehlenden Winkel in dem Dreieck, soll die Funktion auswerten ob er spitz, recht, oder flach ist.
* Damit die automatische Testauswertung funktioniert, musst du die englischen Worte **genau so** zurück geben, wie hier angegeben. 
* (Es gehören keine Unterstriche in die Rückgabe, die gehören zum Markdown-code der README.md, um den Text schräg darzustellen)

**Hinweis**: Ein acute angle (de: spitzer Winkel) ist kleiner als 90°, ein right angle (de: rechter Winkel) ist exakt 90° und ein obtuse angle (de: flacher Winkel) ist größer als 90° (aber kleiner als 180°)

##### Beispiel
````javascript
missingAngle(11, 20) ➞ 'obtuse' // (remaining angle is 149°)
missingAngle(27, 59) ➞ 'obtuse'
missingAngle(135, 11) ➞ 'acute'
missingAngle(45, 45) ➞ 'right angle'
````

![Bild als Beispiel](./triangles.png)

#### 4. Wie ist das Wetter?
* Benutze den ternären Operator für diese Aufgabe.
* Schreib eine Funktion "_isRaining_" (de: esRegnet), die einen Wahrheitswert als Argument nimmt.
* Bei true, gib zurück "_wet day - you need an umbrella!_" (de: nasser Tag - du brauchst einen Schirm)
* Bei false, gib zurück "_dry day - leave your umbrella at home!_" (de: trockener Tag - lass deinen Schirm zu Hause)

##### Beispiel
````javascript
isRaining(true) ➞ 'wet day - you need an umbrella'
````

### Schleifen (engl. Loops) 

Die automatischen Tests kann man hier austricksen.
Wenn Ihr keine Schleifen verwendet um die Rückgaben zu erzeugen, ziehen wir die Punkte manuell wieder ab :)

Beachtet, dass nach dem letzten Wert der Sequenzen kein weiteres Leerzeichen kommt.

#### 1. Sequenzen
* Erstelle eine Funktion "_geometricalSequence_" (de: geometrischeSequenz).
* Verwende eine Schleife (Loop), um die folgende Sequenz zu erzeugen: _`1 2 4 8 16 32 64 128 256`_.
* "klebe" (concatenation) die einzelnen Werte als Zeichenkette zusammen.
* Gib die Zeichenkette als Rückgabewert von der Funktion zurück.

##### Beispiel
````javascript
geometricalSequence() ➞ '1 2 4 8 16 32 64 128 256'
````

#### 2. Vielfache
* Schreibe eine Funktion namens "_multiplesOfThree_" (de: VielfacheVonDrei)
* Verwende eine Schleife (Loop), um die ersten fünf Vielfachen von Drei auszugeben: _`3 6 9 12 15`_
* "klebe" (concatenation) die einzelnen Werte als Zeichenkette zusammen.
* Gib die Zeichenkette als Rückgabewert von der Funktion zurück.

##### Beispiel
````javascript
multiplesOfThree() ➞ '3 6 9 12 15'
````

### Mathe 

#### 1. Du bist sehr Potent!
* Schreibe eine Funktion "_powerOf_" (de: PotenzVon), welche eine ganze Zahl als Argument nimmt.
* Sie soll die Potenz der Zahl mit sich selbst zurückgeben ( Zahl hoch Zahl ).
* Du solltest eine Methode des Math Objektes verwenden, um die Berechnung zu machen.

##### Beispiel:
```javascript 
    powerOf(3); //27
    powerOf(4); //256
 ```

### Probleme lösen 

#### 1. Wie viele Vokale?
* Schreibe eine Funktion "_vowelCount_" (de: vokalAnzahl), die eine Zeichenkette als Argument nimmt.
* Zähle wie viele Vokale die Zeichenkette enthält und gib die Anzahl als Rückgabewert zurück.
* [Vokale](https://de.wikipedia.org/wiki/Vokal) (auch "Selbstlaut") sind die folgenden Buchstaben: A, a, E, e, I, i, O, o, U, u

##### Examples
````javascript
vowelCount("hello") ➞ 2
vowelCount("test") ➞ 1
vowelCount("fbw") ➞ 0
````
[//]: # (autograding info start)
## Results
  [![Results badge](../../blob/badges/.github/badges/master/badge.svg)](https://github.com/D04-1/pb-basic-test-de-semihbeyzade/actions)
  
  [Results Details](https://github.com/D04-1/pb-basic-test-de-semihbeyzade/actions)
  
  ### Debugging your code
  > [reading the test outputs](https://github.com/DCI-EdTech/autograding-setup/wiki/Reading-test-outputs)
  
  There are two ways to see why tasks might not be completed:
  #### 1. Running tests locally
  - Run `npm install`
  - Run `npm test` in the terminal. You will see where your solution differs from the expected result.
  
  #### 2. Inspecting the test output on GitHub
  - Go to the [Actions tab of your exercise repo](https://github.com/D04-1/pb-basic-test-de-semihbeyzade/actions)
  - You will see a list of the test runs. Click on the topmost one.
  - Click on 'Autograding'
  - Expand the item 'Run DCI-EdTech/autograding-action@main'
  - Here you see all outputs from the test run
[//]: # (autograding info end)