class Employee{
    constructor(id,firstName,lastName,taxId,salary){
         this.id = id
         this.firstName = firstName
         this.lastName = lastName
         this.taxId = taxId
         this.salary = salary
    }
    generatePaySlip(){
        let monthlySalary = parseInt(this.salary / 12)
        return `Employee ID:${this.id}\nName: ${this.firstName} ${this.lastName}\nTax ID: ${this.taxId}\nPay:${monthlySalary} `
    }
}

let arda = new Employee(01,'Arda','Turan',4,58000);
console.log(arda.generatePaySlip());

class Manager extends Employee{
    constructor(id,firstName,lastName,taxId,salary,managedEmployees){
       super(id,firstName,lastName,taxId,salary)
       this.managedEmployees = managedEmployees
    }
 set addManagedEmployee(werte){
       return this.managedEmployees.push(werte)
  }

  get addManagedEmployee(){
      return this.addManagedEmployee;
  }
  set removeManagedEmployee(wert){
      for(let i = 0; i < this.managedEmployees.length; i++){
          if(this.managedEmployees[i] === wert)
          return this.managedEmployees.splice(i,1)
      } 
  }

  get removeManagedEmployee(){
      return this.removeManagedEmployee;
  }
}

let angela = new Manager(02,'Angela', 'Merkel', 5,10000,[] )
angela.addManagedEmployee = 'health minister'
console.log(angela.managedEmployees);
angela.addManagedEmployee = 'interior minister'
console.log(angela.managedEmployees);
angela.removeManagedEmployee = 'interior minister'
console.log(angela.managedEmployees);
