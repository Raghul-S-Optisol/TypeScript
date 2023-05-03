// Number data type
let num = 15; // number  
let num1 = 12.0; // floating point
let num2 = 0x37CF; // hexadecimal  
let num3 = 0o377; // octal  
let num4 = 0b111001; // binary  
console.log(num, num1, num2, num3, num4); // 15,12,123, 14287,255,57 
//string Type
let s1 = "hello";
let s2 = "welcome";
var s3 = 'hi';
console.log(s1, s2, s3);
let output2 = `${s1} there! ${s2} you all!`;
console.log(output2);
//boolean Type
let bool1 = true;
let bool2 = false;
console.log(bool1, bool2);
//void Type
let tempNum = undefined;
tempNum = null;
//tempNum = 123;      //Error  
function helloUser() {
    alert("This is a welcome message");
}
helloUser();
//null Type
let null1 = null;
//null1=5;
console.log(null1);
//Any Type
let val = 'Hi';
val = 555;
console.log(val);
val = true;
console.log(val);
function ProcessData(x, y) {
    return x + y;
}
let result;
result = ProcessData("Hello ", "Any!");
console.log(result);
result = ProcessData(2, 3);
console.log(result);
//var variable
function a() {
    var x = 50;
    return function b() {
        var y = x + 5;
        return y;
    };
}
var b = a();
b(); // returns 55
//let Variable
function f(input) {
    let x = 100;
    if (input) {
        // "x" exists here        
        let y = x + 1;
        return y;
    }
    // Error: "y" doesn't exist here  
    // return y;  
}
f(true);
// scoping rules for var and let variable
//var
function func() {
    var X = 5; //Available globally inside f()  
    if (true) {
        var Y = 10; //Available globally inside f()   
        console.log(X); //Output 5  
        console.log(Y); //Output 10  
    }
    console.log(X); //Output 5  
    console.log(Y); //Output 10  
}
func();
//console.log(X); //Returns undefined because value cannot accesses from outside function  
//console.log(Y); //Returns undefined because value cannot accesses from outside function 
//let
function func1(input) {
    let x = 100;
    if (input) {
        // "x" exists here        
        let y = x + 1;
        return y;
    }
    // Error: "y" doesn't exist here  
    //return y;  
}
func1(true);
