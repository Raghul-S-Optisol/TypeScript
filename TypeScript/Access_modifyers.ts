//public modifier
class Student{
    public Id:number;
    name:string; // default value is public
}

let stud1=new Student();
stud1.Id=101;
stud1.name="Raghul"
console.log(`Student ID - ${stud1.Id} and Name is ${stud1.name}`);

//private
class Employee{
    private ID:number;
    private Name:string;
    constructor(id: number, name: string){  
        this.ID = id;  
        this.Name = name;  
    }  
    public display():string {  
        return (`Employee ID: ${this.ID} and Name: ${this.Name}`);  
    }  
}  
          
let Emp: Employee = new Employee(101, 'Raghul');  
console.log(Emp.display());  

//protected
class Manager{
    protected Id:number;
    public Name:string;
    constructor(id:number,name:string){
        this.Id=id;
        this.Name=name;
    }
}
class staff extends Manager{
    protected dept:string;
    constructor(id:number,name:string,dept:string){
            super(id,name)
            this.dept=dept;
    }
     display():void{
        console.log(`Employee ID: ${this.Id} and Name: ${this.Name} and department: ${this.dept}`);
    }
    get getName():string{
        return this.Name;
    }

    set setName(newName:string){
        this.Name=newName;
    }
}

var emp1=new staff(101,'Raghul','Accounts')
emp1.display();
// set 
emp1.setName='RAGHUL'
// get
console.log(emp1.getName);
 