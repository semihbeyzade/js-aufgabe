## 5. Mini Projects
## Mit Tests arbeiten: 

In diesem Projekt gibt es automatisierte Tests. 
Um diese zu verwenden schreib folgendes auf der Kommandozeile: 
`npm install`

Damit wird das Paket, das wir fürs Testen brauchen installiert. 

Um die Tests auszuführen schreibe: `npm run test` und schau dir die Ausgabe auf der Kommandozeile an. 

## 1. Der Wahrsager

Schreibe eine Funktion, die für dich die Zukunft sehen kann!

-   Schreibe eine Funktion mit den Namen  `tellFortune` wie folgt:
    -   die Funktion nimmt  4 Parameter: Zahl von Kindern, Name vom Partner, ein Ort, ein Job.
    -   die Funktion hat als Rückgabewert folgenden Text: "You will be a X in Y, and married to Z with N kids." X sollte mit dem Job ersetzt werden, Y mit dem Ort, Z mit einem Namen und N mit einer Zahl. 
-   Ruf die Funktion mehrmals auf, mit verschiedenen Werten. 

## 2. Hundejahre
Tiere werden oft nicht exakt so alt wie Menschen (etwa 78 bis 83 Jahre).
[Lebenserwartung in Deutschland](https://de.wikipedia.org/wiki/Lebenserwartung#:~:text=In%20Deutschland%20im%20Zeitraum%202016,für%20Frauen%2083%2C3%20Jahre.)

Oft rechnet man Alter von z.B. Hunden in ein Verhältnis zum Alter von Menschen um.
Ein Hund mit 2 Jahren ist ein jugendlicher Hund
Ein Mensch mit 2 Jahren ein Kleinkind.
Nimm an dass ein Menschenjahr etwa 7 Hundejahren entspricht.

Schreibe eine Funktion mit dem Namen c`alculateDogAge`, die Menschenjahre nimmt und Hundejahre ausgibt.

Beispiel:

 `calculateDogAge(4)` => "Your doggie is NN years old in dog years!"

## 3. Lebenslanger Snack-Vorrat
Schreibe eine Funktion, die dir ausrechnet, wie viel von deinem liebsten Snack du brauchst, damit der Vorrat für ein Leben reicht.

Die Funktion soll zwei Werte nehmen, dein Alter und wie viel vom Snack du pro Tag isst. 

**Hinweise:**
Nutze das Durchschnittsalter in Deutschland, egal wo Du geboren wurdest. (Männer 78,5 Jahre, Frauen, 83,3 Jahre )
Sei nicht zu genau, du kannst mit ganzen Zahlen für das maximale Alter rechnen und ignorieren, dass es Schaltjahre gibt (29. Februar alle 4 Jahre => 366 Tage im Jahr)

Beispiel:
 * André sei 38 Jahre alt
 * er isst pro Tag 1 Kinderriegel.
 * noch 40 Jahre bis zum statistischen maximal-Alter von 78
 * ohne an Schaltjahre zu denken hat ein Jahr 365 Tage
 
`calculateSupply(38,1)` =>  "You will need NN to last you until the ripe old age of X"



## 4. Geometrie

Erstelle 2 Funktionen, die die Eigenschaften von einem Kreis berechnet:  Schaue [hier](https://www.mathepower.com/kreis.php) nach, um zu sehen welche Formel du brauchst. Da kanst du auch deine Ergebnisse überprüfen.

Die erste Funktion sollte den Namen `calcCircumfrence` haben:

-   Als Parameter nimmt die Funktion den Radius.
-   Berechen den Umfang und gib folgenden Text aus:  "The circumference is NN". Ersetze NN mit einer Zahl. 
- Runde das Ergebnis zu 2 Nachkommastellen, `1.3333`, sollte als `1.33` ausgegeben werden. 

Die erste Funktion sollte den Namen `calcArea` haben:

-  Als Parameter nimmt die Funktion den Radius.

-  Berechen die Fläche und gib folgenden Text aus "The area is NN".Ersetze NN mit einer Zahl. 
- Runde das Ergebnis zu 2 Nachkommastellen, `1.3333`, sollte als `1.33` ausgegeben werden. 



## 5. The Temperature Converter

Draußen ist es kalt, aber wie kalt? Erstelle ein Temperatur-Umwandler! Schua  [hier](https://www.fahrenheit-umrechnen.de/)   nach, wie die Formel sind.

Erstelle eine Funktion mit dem Namen  `celsiusToFahrenheit`:

- Die Funktion nimmt eine Temperatur in Celcius  als Parameter.
- Wandele diese um zu Fahrenheit und gib folgenden Text aus "NN°C is NN°F."

- Runde das Ergebnis zur nächsten Ganzzahl (integer)


Erstelle eine Funktion mit dem Namen  `fahrenheitToCelsius`:

-  Die Funktion nimmt eine Temperatur in Fahrenheit als Parameter.
-  Wandele diese um zu Celcius und gib folgenden Text aus "NN°F is NN°C."
-  Runde das Ergebnis zur nächsten ganzen Ganzzahl (integer)


--- 

## 1. The Fortune Teller

Why pay a fortune teller when you can just program your fortune yourself?

-   Write a function named  `tellFortune`  that:
    -   takes 4 arguments: number of children, partner's name, geographic location, job title.
    -   outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
-   Call that function 3 times with 3 different values for the arguments.

## 2. The Puppy Age Calculator

You know how old your dog is in human years, but what about dog years? Calculate it!

-   Write a function named  `calculateDogAge`  that:
    -   takes 1 argument: your puppy's age.
    -   calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
    -   outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
-   Call the function three times with different sets of values.
-   **Bonus**: Add an additional argument to the function that takes the conversion rate of human to dog years.


## 3. The Lifetime Supply Calculator

Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

-   Write a function named  `calculateSupply`  that:
    -   takes 2 arguments: age, amount per day.
    -   calculates the amount consumed for rest of the life (based on a constant max age).
    -   outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
-   Call that function three times, passing in different values each time.
-   **Bonus**: Accept floating point values for amount per day, and round the result to a round number.


## 4. The Geometrizer

Create 2 functions that calculate properties of a circle, using the  [definitions](http://math2.org/math/geometry/circles.htm)  here.

Create a function called  `calcCircumfrence`:

-   Pass the radius to the function.
-   Calculate the circumference based on the radius, and output "The circumference is NN".
- Round the result to 2 floating points.

Create a function called  `calcArea`:

-   Pass the radius to the function.
-   Calculate the area based on the radius, and output "The area is NN".
- Round the result to 2 floating points.



## 5. The Temperature Converter

It's hot out! Let's make a converter based on  [the steps](https://www.fahrenheit-umrechnen.de/)  here.

Create a function called  `celsiusToFahrenheit`:

- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F."

- Round the result to the nearest integer.


Create a function called  `fahrenheitToCelsius`:

-  Now store a fahrenheit temperature into a variable.
-  Convert it to celsius and output "NN°F is NN°C."
-  Round the result to the nearest integer.
[//]: # (autograding info start)
## Results
  [![Results badge](../../blob/badges/.github/badges/main/badge.svg)](https://github.com/D04-1/pb-functions-14-02-22-mini-projects-semihbeyzade/actions)
  
  [Results Details](https://github.com/D04-1/pb-functions-14-02-22-mini-projects-semihbeyzade/actions)
  
  ### Debugging your code
  > [reading the test outputs](https://github.com/DCI-EdTech/autograding-setup/wiki/Reading-test-outputs)
  
  There are two ways to see why tasks might not be completed:
  #### 1. Running tests locally
  - Run `npm install`
  - Run `npm test` in the terminal. You will see where your solution differs from the expected result.
  
  #### 2. Inspecting the test output on GitHub
  - Go to the [Actions tab of your exercise repo](https://github.com/D04-1/pb-functions-14-02-22-mini-projects-semihbeyzade/actions)
  - You will see a list of the test runs. Click on the topmost one.
  - Click on 'Autograding'
  - Expand the item 'Run DCI-EdTech/autograding-action@main'
  - Here you see all outputs from the test run
[//]: # (autograding info end)