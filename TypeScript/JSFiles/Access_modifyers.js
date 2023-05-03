//public modifier
class Student {
}
let stud1 = new Student();
stud1.Id = 101;
stud1.name = "Raghul";
console.log(`Student ID - ${stud1.Id} and Name is ${stud1.name}`);
//private
class Employee {
    constructor(id, name) {
        this.ID = id;
        this.Name = name;
    }
    display() {
        return (`Employee ID: ${this.ID} and Name: ${this.Name}`);
    }
}
let Emp = new Employee(101, 'Raghul');
console.log(Emp.display());
//protected
class Manager {
    constructor(id, name) {
        this.Id = id;
        this.Name = name;
    }
}
class staff extends Manager {
    constructor(id, name, dept) {
        super(id, name);
        this.dept = dept;
    }
    display() {
        console.log(`Employee ID: ${this.Id} and Name: ${this.Name} and department: ${this.dept}`);
    }
    get getName() {
        return this.Name;
    }
    set setName(newName) {
        this.Name = newName;
    }
}
var emp1 = new staff(101, 'Raghul', 'Accounts');
emp1.display();
// set 
emp1.setName = 'RAGHUL';
// get
console.log(emp1.getName);
