const titel = (num) => {
    console.log(`===================================== Aufgabe(${num})====================================`);
}

// 1
titel(1)

class Tier {
    constructor(art,anzahlBeine,bewegung){
      this.art = art
      this.anzahlBeine = anzahlBeine
      this.bewegung = bewegung
    }
    infoUberTier(){
       return `Dieses Tier gehört zu ${this.art} und hat ${this.anzahlBeine} Beine. es bewegt sich mit ${this.bewegung}`
    }
}

// 2
titel(2)

class Vogel extends Tier{
    constructor(art,anzahlBeine,bewegung,gesang){
        super(art,anzahlBeine,bewegung)
        this.gesang = gesang
    }
}

let artVonVogel = new Vogel('Ente',2,'Flügel und Beine','singt nicht')
console.log(artVonVogel);

// 3
titel(3)

class Eule extends Vogel{

}

let eule = new Eule('Eule',2,'Flügel und Beine','singt nicht')
console.log(eule);

// 4
titel(4)

class Nachtigel extends Vogel{

}

let nachtigel = new Nachtigel('Nachtigel',2,'Flügel und Beine','singt schön')
console.log(nachtigel);

class Katze extends Tier{
 lieblingsTier(){
     return `Meine Lieblingstier ist ${this.art}, Weil sie sehr süß und intelligent ist. Sie hat ${this.anzahlBeine} Beine und läuft so schnell. Ich habe auch eine ${this.art} und sie gibt mir nur Glück.`
 }
}

let misha = new Katze('Katze',2,'Beine')
console.log(misha.lieblingsTier());

// 5
titel(5)

class Katze1 extends Katze{

  babyKatze(){
      return `${this.art} hat zwei Babys. Eine von ihnen ist gelb-schwarz`
  }
}

let baby1 = new Katze1('Katze',2,'Beine','weiß')
console.log(baby1.babyKatze());



class Katze2 extends Katze{
    babyKatze2(){
        return `${this.art} hat zwei Babys. Andere von ihnen ist weiß`
    }
  }
  
  let baby2 = new Katze2('Katze',2,'Beine')
  console.log(baby2.babyKatze2());


// Bonus


