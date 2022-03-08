# Destrukturieren bei Verschachtelten Objekten
## 1. 
Erstelle ein Objekt mit 3 Eigenschaften. Die dritte Eigenschaften soll als Wert ein weiteres Objekt haben.

Beispiel

    let essen = {
        fruestueck: 'Brei',
        mittag: 'Salat',
        abendessen: {
            vorspeise: 'Suppe',
            hauptgang: 'Spargel mit Kartoffeln und Schinken',
            nachtisch: 'Chokoladenpudding'
        }
    }


Verwende Destrukturierung, um den Wert von Nachtisch in einer neuen Variable zu speichern.

## 2. 

Schreibe eine Funktion, die alle Werte aus dem Objekt aus Aufgabe 1 auf der Konsole ausgibt. Auch die Werten  aus dem eingebetteten Objekt sollen ausgegeben werten.
Verwende Destrukturierende Zuweisung!

## 3. 

Erstelle eine Array, die mehrere Objekte beinhaltet. Ziehe aus jedem Objekt eine Eigenschaft und speichere diese Werte in einer neuen Array.

Bespiel:
    
    let adressen = [
        { 
            straße: 'Vulkanstraße', 
            hausnummer: 10 
        },
        { 
            straße: 'Rigaer straße', 
            hausnummer: 30 
        },
        {
            straße: 'Frankfurter Alle', 
            hausnummer: 101, 
        }]

    Die Array sollte dann so aussehen:
    
        [ 'Vulkanstraße', 'Rigaer straße', 'Frankfurter Alle'] 
    

## Bonus.

Erstell ein Objekt wie in Beispiel:

Beispiel: 

    let objekt = {
        student: 'Klaus Peter',
        fach: 'Web-Entwicklung',
        noten: [1, 2, 1, 4, 5, 3]
    }

Erstelle eine Mthode, die Durchschnittsnote berechnet!
