//optional parameter
function display2() {  
    console.log("Hello There!");  
}   
display2(); 

//default parameter
function displayName(name: string, greeting: string = "Hello") : string {  
    return greeting + ' ' + name + '!';  
}  
console.log(displayName('Raghul'));   
console.log(displayName('Raghul', 'Hi'));   

// Rest parameter
function sum1(a: number, ...b: number[]): number {  
    let result = a;  
    for (var i = 0; i < b.length; i++) {  
    result += b[i];  
    }  
    return result;  
}  
let result1 = sum1(3, 5);  
let result2 = sum1(3, 5, 7, 9);  
console.log(result1 +"\n" + result2);  

//function overloading

//Function with string type parameter  
function add(a:string, b:string): string;  
//Function with number type parameter  
function add(a:number, b:number): number;  
//Function Definition  
function add(a: any, b:any): any {  
    return a + b;  
}  
//Result  
console.log("Addition: " +add("Hello" ,"Guys"));   
console.log("Addition: "+add(30, 20));  
