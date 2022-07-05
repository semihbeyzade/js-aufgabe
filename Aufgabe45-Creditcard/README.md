# Kreditkartenvalidierung

Du gründest dein eigenes Kreditkartengeschäft. Du musst einen neuen Weg finden, um Kreditkarten mit einer einfachen Funktion namens `validateCreditCard` zu validieren, die `true` oder `false` zurückgibt.

Hier sind die Regeln für eine gültige Nummer:

- Die Nummer muss aus 16 Ziffern bestehen, die alle Zahlen sein müssen.
- Es müssen mindestens zwei verschiedene Ziffern vorhanden sein (die Ziffern können nicht alle gleich sein)
- Die letzte Ziffer muss gerade sein
- Die Summe aller Ziffern muss größer als 16 sein.

Die folgenden Kreditkartennummern sind gültig:

- `9999777788880000`
- `6666666666661666`

Die folgenden Kreditkartennummern sind ungültig:

- `a92332119c011112` _ungültige Zeichen_
- `444444444444444444` _nur ein Zahlentyp_
- `111111111111111110` _Summe kleiner als 16_
- `66666666666661` _Ungerade Endziffer_


**Bonus #1:** Eine gültige Kreditkartennummer kann auch Bindestriche enthalten, um die Lesbarkeit der Kartennummer zu erleichtern. Zum Beispiel sind die folgenden Kreditkartennummern jetzt auch gültig:

- `9999-7777-8888-0000`
- `6666-6666-6666-1666`

Aktualisieren Sie Ihr Programm, um solche Nummern zuzulassen. (Tipp: Entfernen Sie die Bindestriche aus dem Eingabe-String, bevor Sie prüfen, ob die eingegebene Kreditkartennummer gültig ist).

**Bonus #2:** Geben Sie ein Objekt zurück, das angibt, ob die Kreditkarte gültig ist, und wenn nicht, was der Fehler ist  
`{ gültig: wahr, Nummer: '9923-3211-9c01-1112' }`  
`{ gültig: falsch, Nummer: '9923-3211-9c01-1112', Fehler: 'wrong_length' }`

----------

**Bonus #3:** Machen Sie Ihr Kreditkartensystem noch fortschrittlicher! Wie lauten die Regeln, und welche Zahlen sind zulässig oder nicht zulässig? Idee: Prüfe das Ablaufdatum! Schau dir den [Luhn-Algorithmus] (https://en.wikipedia.org/wiki/Luhn_algorithm) an, um dich zu inspirieren.




# Credit Card Validation

You're starting your own credit card business. You need to come up with a new way to validate credit cards with a simple function called  `validateCreditCard`  that returns  `true`  or  `false`.

Here are the rules for a valid number:

-   Number must be 16 digits, all of them must be numbers
-   You must have at least two different digits represented (all of the digits cannot be the same)
-   The final digit must be even
-   The sum of all the digits must be greater than 16

The following credit card numbers are valid:

-   `9999777788880000`
-   `6666666666661666`

The following credit card numbers are invalid:

-   `a92332119c011112`  _invalid characters_
-   `4444444444444444`  _only one type of number_
-   `1111111111111110`  _sum less than 16_
-   `6666666666666661`  _odd final number_


**Bonus #1:**  A valid credit card number may also contain dashes, to make a card number easier to read. For example, the following credit card numbers are now also valid:

-   `9999-7777-8888-0000`
-   `6666-6666-6666-1666`

Update your program to allow such numbers. (Hint: Remove the dashes from the input string before checking if the input credit card number is valid.)

**Bonus #2:**  Return an object indicating whether the credit card is valid, and if not, what the error is  
`{ valid: true, number: '9923-3211-9c01-1112' }`  
`{ valid: false, number: '9923-3211-9c01-1112', error: ‘wrong_length’ }`

----------

**Bonus #3:**  Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the  [Luhn Algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm)  for inspiration.
