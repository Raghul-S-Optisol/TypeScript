class Managers {
    constructor(id, name) {
        this.Id = id;
        this.Name = name;
    }
}
class staffs extends Managers {
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
var emp2 = new staffs(101, 'Raghul', 'Developer');
emp2.display();
// set 
emp2.setName = 'RAGHUL';
// get
console.log(emp2.getName);
