
class Managers{
    protected Id:number;
    public Name:string;
    constructor(id:number,name:string){
        this.Id=id;
        this.Name=name;
    }
}
class staffs extends Managers{
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

var emp2=new staffs(101,'Raghul','Developer')
emp2.display();
// set 
emp2.setName='RAGHUL'
// get
console.log(emp2.getName);