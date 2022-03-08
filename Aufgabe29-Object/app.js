// 1

/*function student(vorname, nachname, klasse){
    return{
        vorname: vorname,
        nachname: nachname,
        klasse: klasse
    },
    console.log(`${vorname} ${nachname} ist ein Schüler der Klasse ${klasse}`);
};

student('John', 'Smith', 12)
student('semih', 'örscelik', 10)*/

const Student = { Vorname: "John", Nachname: "Schmied", Klasse: 12, StudentInfo: function(){
    console.log(`${this.Vorname} ${this.Nachname} ist ein Schüler der Klasse ${this.Klasse}`);
} };

Student.StudentInfo()

// 2

/*function person(vorname, nachname, alter, beruf, stadt){
    return{
        vorname: vorname,
        nachname: nachname,
        alter: alter,
        beruf: beruf,
        stadt: stadt
    },
    console.log(`${vorname} ${nachname} ist ein ${alter} Jahre alter ${beruf}, der in ${stadt} lebt.`);
};

person('John', 'Smith', 41, 'Ingenieur', 'Frankreich');*/

const person = {
    vorname: 'John',
    nachname: 'Smith',
    alter: 41,
    beruf: 'Ingenieur',
    stadt: 'Frankreich',
    personInfo: function(){
        console.log(`${this.vorname} ${this.nachname} ist ein ${this.alter} Jahre alter ${this.beruf}, der in ${this.stadt} lebt.`);
    },
    laenge: function(){
        console.log(Object.keys(this).length);
       
    }
}

person.personInfo();

// Bonus

//console.log(Object.keys(person).length);

person.laenge();

                 





