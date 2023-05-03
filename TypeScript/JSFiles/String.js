let name1 = new String("Hello there!!");
let name2 = 'Have a nice day!';
console.log("Message: " + name1, name2);
//Back-ticks strings
console.log(`${name1} and ${name2}`);
let pet;
if (pet = 'dog') {
    console.log("Pet having the value");
}
function showFruitName(fruitsName) {
    console.log("having the value -", fruitsName);
}
showFruitName('Mango');
// String methods
//String Initialization  
let str1 = 'Hello';
let str2 = 'Welcome';
//String Concatenation  
console.log("Combined Result: " + str1.concat(str2));
//String charAt  
console.log("Character At 4: " + str2.charAt(4));
//String indexOf  
console.log("Index of W: " + str2.indexOf('W'));
//String replace  
console.log("After Replacement: " + str1.replace('Hello', 'Hello There!'));
//String uppercase  
console.log("UpperCase: " + str2.toUpperCase());
