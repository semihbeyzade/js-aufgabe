# Funktionen, die funktioniern

## 1. Code debuggen: 

Schau in der Index-Datei nach unter Punkt 1. Der Code da ist kaputt. Wie kannst du es lösen?


## 2. this verstehen
Worauf verweist `this` in den folgenden Beispielen?

Beispiel 1:
``` js
const myObject = {
  name: 'Lahle', 
  beruf: 'Musikerin', 
  vorstellen: function (){
    return `Hi ich bin ${this.name} und ich bin ${this.beruf}`
  }
}
```

Beispiel 2:

``` js 

const myObjectArrow = {
  name: 'Lahle', 
  beruf: 'Musikerin', 
  vorstellen: () => {
    return `Hi ich bin ${this.name} und ich bin ${this.beruf}`
  }
}
```

Führe die Methoden aus, und schau dir den Rückgabewerten genau an. Der Code gibt es auch in der index-Date. 


## 3. Callbacks: 

* 3.1 Schreibe den code in der index.js Datei um, so dass die `map`, `filter` und `reduce` Methoden einen benannten Funktion statt eine anonyme Funktion als Callbackfunktion nehmen. 

* 3.2. Verwende `setTimeout` und gebe diese Funktion eine Callbackfunktion `rufMichSpaeter`, die nach 3 sekunden ausgeführt wird. 


## 4. agruments

Schreibe eine Funktion, die auf die Konsole ausgibt, mit wie vielen Argumenten die Funktion ausgefürht wird.

Beispiel: 
``` js
vieViele('hallo', 'tschüss') 
// gibt auf die Konsole aus: Die Funktion wurde mit 2 Argumente ausführt.
```

