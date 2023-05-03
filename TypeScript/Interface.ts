interface Person {   
    name:string    
 }  
 interface PersonDetail {   
     age:number  
     gender:string  
 }  
 interface Employee extends Person, PersonDetail {   
     empCode:number  
 }  
 let empObject = <Employee>{};   
 empObject.name = "Abhishek"  
 empObject.age = 25   
 empObject.gender = "Male"  
 empObject.empCode = 43  
 console.log("Name: "+empObject.name);  
 console.log("Employee Code: "+empObject.empCode);  

 // Interface with class
 interface Details {  
    firstName: string;  
    lastName: string;  
    age: number;  
    FullName();  
    GetAge();  
}  
// implementing the interface  
class Employer implements Details {  
    firstName: string;  
    lastName: string;  
    age:number;  
    FullName() {  
        return this.firstName + ' ' + this.lastName;  
    }  
    GetAge() {  
        return this.age;  
    }  
    constructor(firstN: string, lastN: string, getAge: number) {  
        this.firstName = firstN;  
        this.lastName = lastN;  
        this.age = getAge;  
    }  
}  
// using the class that implements interface  
let myEmployee = new Employer('Abhishek', 'Mishra', 25);  
let fullName = myEmployee.FullName();  
let Age = myEmployee.GetAge();  
console.log("Name of Person: " +fullName + '\nAge: ' + Age);  