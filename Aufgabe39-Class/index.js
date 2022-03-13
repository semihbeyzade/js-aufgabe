class Employee {
	constructor (firstname, lastname) {
		this.firstname = firstname
		this.lastname = lastname
		// Complete the code!
		this.fullname = this.firstname + ' ' + this.lastname
		this.email = (this.firstname +  '.' + this.lastname + '@company.com').toLowerCase()
	}
}

let emp1 = new Employee('Semih', 'Orscelik')
console.log(emp1.fullname);

let emp2 = new Employee('Michael', 'Jackson')
console.log(emp2.email);

let emp3 = new Employee('Angela', 'Merkel')
console.log(emp3.firstname);

class Angestellte {
	constructor (firstname, lastname) {
		this.firstname = firstname
		this.lastname = lastname
		// Complete the code!
	}

	fullname(){
		return `${this.firstname} ${this.lastname}`
	}
	email(){
		return (`${this.firstname}.${this.lastname}@company.com`).toLowerCase()
	}
}

let ang1 = new Angestellte('Semih', 'Orscelik')
console.log(ang1.fullname());

let ang2 = new Angestellte('Michael', 'Jackson')
console.log(ang2.email());

let ang3 = new Angestellte('Angela', 'Merkel')
console.log(ang3.firstname);