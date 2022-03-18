// 1

class Person {
  #passwort = "006";
  #age;
  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }

  get importantNumber() {
    return this.#passwort;
  }
  sayAge() {
    return this.#age;
  }
}

// 2

let person1 = new Person("Alex", 18);
//console.log(person1);

// Man kann private Eigenschaft ohne Methoden nicht sehen.

// 3
console.log(person1.importantNumber);
console.log(person1.sayAge());
