let name1 = new String("Hello there!!");  
let name2:string='Have a nice day!'
console.log("Message: " +name1,name2);  

//Back-ticks strings
console.log(`${name1} and ${name2}`)

//String Literal Type
type Pet = 'cat' | 'dog' | 'Rabbit';  
let pet: Pet;  
if(pet = 'dog'){  
    console.log("Pet having the value");  
} 
// if(pet = 'Deer'){ } compilation error because deer is not a value of Pet 

//function parameter
type FruitsName = "Apple" | "Mango" | "Orange";  
function showFruitName(fruitsName: FruitsName): void {  
    console.log("having the value -",fruitsName);  
}  
showFruitName('Mango');

// String methods
//String Initialization  
let str1: string = 'Hello';  
let str2: string = 'Welcome';  
//String Concatenation  
console.log("Combined Result: " +str1.concat(str2));  
//String charAt  
console.log("Character At 4: " +str2.charAt(4));  
//String indexOf  
console.log("Index of W: " +str2.indexOf('W'));  
//String replace  
console.log("After Replacement: " +str1.replace('Hello', 'Hello There!'));  
//String uppercase  
console.log("UpperCase: " +str2.toUpperCase());  