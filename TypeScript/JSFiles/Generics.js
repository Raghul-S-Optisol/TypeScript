function identity(arg) {
    return arg;
}
let out1 = identity("myString");
let out2 = identity(100);
console.log(out1);
console.log(out2);
// with array
function getItems(items) {
    return new Array().concat(items);
}
let arrNumber = getItems([10, 20, 30]);
let arrString = getItems(["Hello", "Welcome"]);
arrNumber.push(40); // Correct  
//arrNumber.push("Hi! Javatpoint"); // Compilation Error because cannot push string to number 
arrString.push("Hello There"); // Correct  
//arrString.push(50); // Compilation Error  
console.log(arrNumber);
console.log(arrString);
// multitype variables
function displayDataType(id, name) {
    console.log("DataType of Id: " + typeof (id) + "\nDataType of Name: " + typeof (name));
}
displayDataType(101, "Abhishek");
// Generic classes
class StudentInfo {
    setValue(id, name) {
        this.Id = id;
        this.Name = name;
    }
    display() {
        console.log(`Id = ${this.Id}, Name = ${this.Name}`);
    }
}
let st = new StudentInfo();
st.setValue(101, "Virat");
st.display();
let std = new StudentInfo();
std.setValue("201", "Rohit");
std.display();
function printName(theInput) {
    console.log(`Name: ${theInput.name} \nAge: ${theInput.age} \nProfession: ${theInput.profession}`);
}
let player = {
    name: 'Rohit Sharma', age: 30, profession: 'Cricket Player'
};
printName(player);
