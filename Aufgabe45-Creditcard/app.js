function validateCreditCard(CreditNumber) {
    let CreditNumberWithoutDash = "";
    // ohne - bekomme ich alles in CreditNummber
    for (let i = 0; i < CreditNumber.length; i++) {
      if (CreditNumber[i] !== "-") {
        CreditNumberWithoutDash += CreditNumber[i];
      }
    }
    // wenn 16 zahl ist mach weiter , wenn nicht raus
    const numberLenght = CreditNumberWithoutDash.length;
    if (numberLenght !== 16) {
      return false;
    }
    // wenn carecter ist bekomme ich false , muss alles zahl sein
    for (let i = 0; i < numberLenght; i++) {
      let currentNumber = CreditNumberWithoutDash[i];
      currentNumber = Number.parseInt(currentNumber);
  
      if (!Number.isInteger(currentNumber)) {
        return false;
      }
    }
    // jetzt muss %2 gerage sein (zoj bodano check mikone)
    if (CreditNumberWithoutDash[numberLenght - 1] % 2 !== 0) {
      return false;
    }
    // + nabayad mehr alls 16 sein
    let sum = 0;
    for (let i = 0; i < numberLenght; i++) {
      sum += Number(CreditNumberWithoutDash[i]);
    }
    if (sum <= 16) {
      return false;
    }
    return true;
  }
console.log(validateCreditCard('1234-5678-9123-6548'));
console.log(validateCreditCard('1234-5678-9123-6543'));
console.log(validateCreditCard('1111-1111-1111-1110'));






