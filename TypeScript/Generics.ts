function identity<T>(arg: T): T {    
    return arg;    
}    
let out1 = identity<string>("myString");    
let out2 = identity<number>( 100 );  
console.log(out1);  
console.log(out2);  

// with array
function getItems<T>(items : T[] ) : T[] {  
    return new Array<T>().concat(items);  
}  
let arrNumber = getItems<number>([10, 20, 30]);  
let arrString = getItems<string>(["Hello", "Welcome"]);  
arrNumber.push(40); // Correct  
//arrNumber.push("Hi! Javatpoint"); // Compilation Error because cannot push string to number 
arrString.push("Hello There"); // Correct  
//arrString.push(50); // Compilation Error  
console.log(arrNumber);  
console.log(arrString);  

// multitype variables
function displayDataType<T, U>(id:T, name:U): void {   
    console.log("DataType of Id: "+typeof(id) + "\nDataType of Name: "+ typeof(name));    
}  
displayDataType<number, string>(101, "Abhishek");  

// Generic classes
class StudentInfo<T,U>  
{   
    private Id: T;  
    private Name: U;  
    setValue(id: T, name: U): void {   
        this.Id = id;  
        this.Name = name;  
    }  
    display():void {   
        console.log(`Id = ${this.Id}, Name = ${this.Name}`);  
    }  
}  
let st = new StudentInfo<number, string>();  
st.setValue(101, "Virat");  
st.display();  
let std = new StudentInfo<string, string>();  
std.setValue("201", "Rohit");  
std.display();  

// Generic interface
interface People {  
    name: string  
    age: number  
}  
interface Celebrity extends People {  
    profession: string  
}  
function printName<T extends Celebrity>(theInput: T): void {  
    console.log(`Name: ${theInput.name} \nAge: ${theInput.age} \nProfession: ${theInput.profession}`);  
}  
let player: Celebrity = {  
    name: 'Rohit Sharma', age: 30, profession: 'Cricket Player'  
}  
printName(player);  