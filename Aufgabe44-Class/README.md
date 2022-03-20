# Coffee Shop App

Schreiben Sie eine **Klasse** namens **CoffeeShop**, mit **drei Parametern im Constructor**:

1.  **Name** : eine Zeichenkette (grundsätzlich der Name des Shops)
2.  **Menü** : ein Array von Artikeln (vom Typ Objekt), wobei jeder Artikel den **Artikel** (Name des Artikels), **Typ** (ob _Lebensmittel_ oder ein _Getränk_) und **Preis** enthält. Hier ist ein Beispiel für einen Eintrag auf der Speisekarte: 
```
{Eintrag: 'Tee', Typ:'Getränk', Preis: 2.5}
```
**Das Array mit den Objekten müssen Sie selbst erstellen** 


3.  **Bestellungen** : ein leeres Array

und **sieben Methoden**:

1.  **addOrder**: fügt den **Namen** des Eintrags an das Ende des Arrays **orders** an, wenn er im **Menü** vorhanden ist. Andernfalls wird zurückgegeben: "Dieser Artikel ist derzeit nicht verfügbar!"
2.  **fulfillOrder**: Wenn das Array **orders** **nicht leer** ist, wird das erste Element im Array zurückgegeben, das bereit ist. Wenn das Array `orders`: `['cookie', 'tea', 'coffee']` ist, sollte es zurückgeben: `"Der cookie ist fertig!"`. Wenn das Array **Bestellungen** leer ist, soll zurückgegeben werden: `"Alle Bestellungen wurden erfüllt!"`.
3.  **listOrders**: gibt die Liste der **Bestellungen** zurück, ansonsten ein **leeres** Array.
4.  **dueAmount**: gibt den fälligen Gesamtbetrag für die **Bestellungen** zurück.
5.  **cheapestItem**: gibt den **Name** des billigsten Artikels auf der Speisekarte zurück.
6.  **drinksOnly**: gibt nur die **Namen der Artikel** vom Typ **Getränk** aus der Speisekarte zurück.
7.  **foodOnly**: gibt nur die _Einzelteil_ **Namen** von _Typ_ **Lebensmittel** aus dem Menü zurück.

**WICHTIG**: Bestellungen werden in einer **FIFO** (first-in, first-out) Reihenfolge ausgeführt.


### Beispiele

```
tcs.addOrder("hot cocoa") ➞ "This item is currently unavailable!"
// Tesha's coffee shop does not sell hot cocoa
tcs.addOrder("iced tea") ➞ "This item is currently unavailable!"
// specifying the variant of "iced tea" will help the process

tcs.addOrder("cinnamon roll") ➞  "Order added!"
tcs.addOrder("iced coffee") ➞ "Order added!"
tcs.listOrders() ➞ ["cinnamon roll", "iced coffee"]
// the list of all the items in the current order

tcs.dueAmount() ➞ 2.17

tcs.fulfillOrder() ➞ "The cinnamon roll is ready!"
tcs.fulfillOrder() ➞ "The iced coffee is ready!"
tcs.fulfillOrder() ➞ "All orders have been fulfilled!"
// all orders have been presumably served

tcs.listOrders() ➞ []
// an empty array is returned if all orders have been exhausted

tcs.dueAmount() ➞ 0.0
// no new orders taken, expect a zero payable

tcs.cheapestItem() ➞ "lemonade"
tcs.drinksOnly() ➞ ["orange juice", "lemonade", "cranberry juice", "pineapple juice", "lemon iced tea", "vanilla chai latte", "hot chocolate", "iced coffee"]
tcs.foodOnly() ➞ ["tuna sandwich", "ham and cheese sandwich", "bacon and egg", "steak", "hamburger", "cinnamon roll"]
```

### Hinweis

Runde die Summe von **due amount** auf 2 Nachkomma-Zahlen.

---

# Coffee Shop App

Write a **class** called **CoffeeShop**, with **three parameters in the constructor**:

1.  **name** : a string (basically, of the shop)
2.  **menu** : an array of items (of object type), with each item containing the **item** (name of the item), **type** (whether _food_ or a _drink_) and **price**. Here is an example of one item on the menu: 
```
{item: 'Tea', type:'drink', price: 2.5}
```
**You have to create the array of objects yourself** 


3.  **orders** : an empty array

and **seven methods**:

1.  **addOrder**: adds the **name** of the item to the end of the **orders** array if it exists on the **menu**. Otherwise, return `"This item is currently unavailable!"`
2.  **fulfillOrder**: if the **orders** array is **not empty**, return the first item in the array that is ready. If the orders array is: `['cookie', 'tea', 'coffee']` it should return: `"The cookie is ready!"`. If the **orders** array is empty, return `"All orders have been fulfilled!"`
3.  **listOrders**: returns the list of **orders** taken, otherwise, an **empty** array.
4.  **dueAmount**: returns the total amount due for the **orders** taken.
5.  **cheapestItem**: returns the **name** of the cheapest item on the menu.
6.  **drinksOnly**: returns only the _item_  **names** of _type_  **drink** from the menu.
7.  **foodOnly**: returns only the _item_  **names** of _type_  **food** from the menu.

**IMPORTANT**: Orders are fulfilled in a **FIFO** (first-in, first-out) order.


### Examples

```
tcs.addOrder("hot cocoa") ➞ "This item is currently unavailable!"
// Tesha's coffee shop does not sell hot cocoa
tcs.addOrder("iced tea") ➞ "This item is currently unavailable!"
// specifying the variant of "iced tea" will help the process

tcs.addOrder("cinnamon roll") ➞  "Order added!"
tcs.addOrder("iced coffee") ➞ "Order added!"
tcs.listOrders() ➞ ["cinnamon roll", "iced coffee"]
// the list of all the items in the current order

tcs.dueAmount() ➞ 2.17

tcs.fulfillOrder() ➞ "The cinnamon roll is ready!"
tcs.fulfillOrder() ➞ "The iced coffee is ready!"
tcs.fulfillOrder() ➞ "All orders have been fulfilled!"
// all orders have been presumably served

tcs.listOrders() ➞ []
// an empty array is returned if all orders have been exhausted

tcs.dueAmount() ➞ 0.0
// no new orders taken, expect a zero payable

tcs.cheapestItem() ➞ "lemonade"
tcs.drinksOnly() ➞ ["orange juice", "lemonade", "cranberry juice", "pineapple juice", "lemon iced tea", "vanilla chai latte", "hot chocolate", "iced coffee"]
tcs.foodOnly() ➞ ["tuna sandwich", "ham and cheese sandwich", "bacon and egg", "steak", "hamburger", "cinnamon roll"]
```

### Notes

Round off **due amount** up to **two decimal** places.
