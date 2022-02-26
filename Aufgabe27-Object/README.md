# Mit Objekten Arbeiten

## 1. Enthält das Objekt einen bestimmten Schlüssel?

### Schritt 1:

Prüfe in deinem Code, ob ein Objekt einen bestimmten Key (Schlüssel) hat. Verwende das Objekt im Beispiel und prüfe, ob die Eingenschaft `wohnort` vorhanden ist. Prüfe auch, ob die Eigenschaft `name` vorhanden ist.

Gib das Ergebniss auf die Konsole aus.

Beispiel:

```js
let person = {
  name: "Peter Pan",
  alter: 10,
};
```

### Bonus: Schritt 2:

Schreibe eine Funktion, die `true` zurückgibt, wenn ein Objekt den angegebenen Eingenschaft enthält, und sonst `false`.

Beispiele

```js

let obbj1 = { a: 44, b: 45, c: 46 }
    hasKey(obj1, "d") ➞ false
let obj2 = { pot: 1, tot: 2, not: 3 }
    hasKey(obj2, "not") ➞ true
```

## 2. Internationale Grüße

Angenommen, Sie haben eine Gästeliste mit Schülern und dem Land, aus dem sie stammen, als Schlüssel-Wert-Paare in einem Objekt gespeichert.

```js
const guest_list = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina",
};
```

### Schritt 1:

Gib für jeden Teilnehmer aus, wie sie heißen und wo sie herkommen auf die Konsole.

` "Hi! I'm [name], and I'm from [country]."`

### Schritt 2:

Löse die Aufgabe mit einer Schleife.

### Bonus: Schritt 3:

Löse die Aufgabe mit einer Funktion.

Beispiele

```js
    greeting("Randy") ➞ "Hi! I'm Randy, and I'm from Germany."

    greeting("Sam") ➞ "Hi! I'm Sam, and I'm from Argentina."

```

## 2 (b). Umwandeln

Verwende das Objekt aus der vorigen Aufgabe und schreibe Code, so dass alle Werte nur in Großbuchstaben erscheinen:

Beispiel Ausgabe:

```js
guest_list = {
  Randy: 'GERMANY',
  Karla: 'FRANCE',
  Wendy: 'JAPAN',
  Norman: 'ENGLAND',
  Sam: 'ARGENTINA
  }
```

## 3. Fakten zur Stadt

Erstellen Sie eine Funktion, die ein Objekt als Argument nimmt und einen String mit Fakten über die Stadt zurückgibt. Die Fakten über die Stadt müssen aus den drei Eigenschaften des Objekts extrahiert werden:

- Name
- Bevölkerung
- Kontinent

Die String sollte das folgende Format haben: `X hat eine Bevölkerung von Y und liegt in Z` (wobei X der Stadtname, Y die Bevölkerung und Z der Kontinent ist, auf dem die Stadt liegt).

Beispiele

```js
 let stadt1 = {
    Name: "Paris",
    Bevölkerung: "2,140,526",
    Kontinent: "Europa"
    }

    cityFacts(stadt1) ➞ "Paris hat 2.140.526 Einwohner und liegt in Europa".

let stadt2 = {
    Name: "Tokio",
    Bevölkerung: "13,929,286",
    Kontinent: "Asien
    }

    cityFacts(stadt2) ➞ "Tokio hat eine Bevölkerung von 13.929.286 und liegt in Asien"
```

## 4. Volumen rechnen

Wie kannst du das Volumen von einem Objekt berechen?

### Schritt 1

Berechne das Volumen mit Hilfe von den Werten im Objekt und gib das Ergebniss auf die Konsole aus.

```js
let box = {
  breite: 2,
  länge: 2,
  höhe: 2,
};
```

### Schritt 2

Passe dein Code an und
erstelle eine Funktion, die die Größen des Objekts (mit Eigenschaften für Breite, Länge, Höhe) nimmt und das Volumen der Box zurückgibt.

Beispiele:

```js

 let box1 = {
     breite: 2,
     länge: 5,
     höhe: 1
     }

volumeOfBox(box1) ➞ 10

let box2 = {
    breite: 4,
    länge: 2,
    höhe: 2
    }

volumeOfBox(box2) ➞ 16

let box3 = {
    breite: 2,
    länge: 3,
    höhe: 5
    }

volumeOfBox(box3) ➞ 30

```

_Hinweise_

- Vergiss nicht, das Ergebnis zurückzugeben.
- Denke daran, dass sich die Werte in einem Objekt befinden.
- Volumen ist Länge _ Breite _ Höhe.

## 5. Bonus: Berechnen Sie den Gewinn

Sie arbeiten für einen Hersteller und wurden gebeten, den Gesamtgewinn aus dem Verkauf eines Produkts zu berechnen. Sie erhalten ein Objekt, das den Selbstkostenpreis pro Einheit (in US-Dollar), den Verkaufspreis pro Einheit (in US-Dollar) und den Anfangsbestand enthält. Gibt den Gesamtgewinn aus, auf den nächsten Dollar gerundet.

Beispiele

```js
    profit({
    costPrice: 32.67,
    sellPrice: 45.00,
    inventory: 1200
    }) ➞ 14796

    profit({
    costPrice: 225.89,
    sellPrice: 550.00,
    inventory: 100
    }) ➞ 32411

    profit({
    costPrice: 2.77,
    sellPrice: 7.95,
    inventory: 8500
    }) ➞ 44030
```

_Hinweis_

- Nimm an, dass das gesamte Inventar verkauft wird.
- Gewinn = Gesamtumsatz - Gesamtkosten
