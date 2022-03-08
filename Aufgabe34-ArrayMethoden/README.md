# Map, Filter, Reduce
In dieser Aufabge gibe es automatische Tests. Wenn du diese ausführen möchtest muss du folgendes machen: 
1. `npm install` einmal ausführen
2. Um die Tests auszuführen: `npm run test` auf der Kommandozeile ausführen.. 


* Arbeite in der  `index.js` Datei, die schon erstellt ist. 


#### 1. Increment by 1
```javascript 
const arrayOfNumbers = [3, 45, 6, 56, 7, 9]; 
``` 
* Erstellen Sie eine Funktion, die jedes Element im `arrayOfNumbers` um 1 erhöht und ein neues Array mit geänderten Elementen zurückgibt.

#### 2. Filter Evens
* Erstellen Sie eine Funktion namens `filterEvens`, die ein Array filtert und nur gerade Zahlen zurückgibt. Die Funktion sollte ein Array von Zahlen als Argument nehmen und keine Schleife verwenden.

* Examples:
```javascript
filterEvens([1,2,3,11,12,13]); //returns [2,12]
filterEvens([22,2,31,110,6,13]); //returns [22,2,110,6]
```

#### 3. Filter Friends
* Gegeben ist ein Array. Erstelle eine Funktion mit dem Namen `filterItems`, die das Array anhand einer Suchanfrage filtert.

* Examples

```javascript
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
console.log(filterItems(friends, 'ka')); // ["Rika"];
console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];
```

#### 4. Sum Up
* Schreiben Sie eine Funktion namens `sum`, die die Methode reduce verwendet, um eine Reihe von Zahlen zu summieren. 

* Examples:
```javascript
sum([1,2,3,4,5]); //returns 15
sum([6,7,7]); //returns 20
```

#### 5. Get total orders
* Erstelle eine Funktion mit dem Naman `totalAmount`. Die Funktion sollte den  Gesamtwert der Bestellungen berechnen und zurückgeben. (dafür musst du die Werte, die in der Eigenschaft `amount` gespeichert sind, zusammenrechnen.)

```javascript
const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
];
```
#### 6. Square Root
* Erstelle ein Funktion mit dem Namen `getSquareRoot`. Erstelle nauch eine Array mit Zahlen. Die Funktion sollte die Quadratwurzel jedes Elements in der Array zurückgeben.

---

# Map, Filter, Reduce

* Work from the `index.js` file provided in this repository.



#### 1. Increment by 1
```javascript 
const arrayOfNumbers = [3, 45, 6, 56, 7, 9]; 
``` 
* Create a function that increments each element in the `arrayOfNumbers` by 1. Return the a new array of modified elements.

#### 2. Filter Evens
* Create a function called filterEvens that filters an array and only return even numbers. The function should take an array of numbers as an argument, and should not use a loop.

* Examples:
```javascript
filterEvens([1,2,3,11,12,13]); //returns [2,12]
filterEvens([22,2,31,110,6,13]); //returns [22,2,110,6]
```

#### 3. Filter Friends
* Given an array, create a function which filters array based on a search query.

* Examples

```javascript
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
console.log(filterItems(friends, 'ka')); // ["Rika"];
console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];
```

#### 4. Sum Up
* Write a function called sum that uses the reduce method to sum up an array of numbers. 

* Examples:
```javascript
sum([1,2,3,4,5]); //returns 15
sum([6,7,7]); //returns 20
```
#### 5. Get total orders
* Return the total amount of orders. 

```javascript
const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
];
```
#### 6. Square Root
* Given an array of numbers, find the square root of each element in the array.
[//]: # (autograding info start)
## Results
  [![Results badge](../../blob/badges/.github/badges/main/badge.svg)](https://github.com/D04-1/pb-data-28-02-22-datastructure-advarray-semihbeyzade/actions)
  
  [Results Details](https://github.com/D04-1/pb-data-28-02-22-datastructure-advarray-semihbeyzade/actions)
  
  ### Debugging your code
  > [reading the test outputs](https://github.com/DCI-EdTech/autograding-setup/wiki/Reading-test-outputs)
  
  There are two ways to see why tasks might not be completed:
  #### 1. Running tests locally
  - Run `npm install`
  - Run `npm test` in the terminal. You will see where your solution differs from the expected result.
  
  #### 2. Inspecting the test output on GitHub
  - Go to the [Actions tab of your exercise repo](https://github.com/D04-1/pb-data-28-02-22-datastructure-advarray-semihbeyzade/actions)
  - You will see a list of the test runs. Click on the topmost one.
  - Click on 'Autograding'
  - Expand the item 'Run DCI-EdTech/autograding-action@main'
  - Here you see all outputs from the test run
[//]: # (autograding info end)