let empObject = {};
empObject.name = "Abhishek";
empObject.age = 25;
empObject.gender = "Male";
empObject.empCode = 43;
console.log("Name: " + empObject.name);
console.log("Employee Code: " + empObject.empCode);
// implementing the interface  
class Employer {
    FullName() {
        return this.firstName + ' ' + this.lastName;
    }
    GetAge() {
        return this.age;
    }
    constructor(firstN, lastN, getAge) {
        this.firstName = firstN;
        this.lastName = lastN;
        this.age = getAge;
    }
}
// using the class that implements interface  
let myEmployee = new Employer('Abhishek', 'Mishra', 25);
let fullName = myEmployee.FullName();
let Age = myEmployee.GetAge();
console.log("Name of Person: " + fullName + '\nAge: ' + Age);
