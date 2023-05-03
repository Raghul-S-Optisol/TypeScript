//union in typescript
//TypeScript can combine one or two different types of data (i.e.,number,string,etc.) in a single type

let value: number|string;  
value = 120;  
console.log("The Numeric value of a value is: "+value);  
value = "String";  
console.log("The String value of a value is: "+value); 


//Passing Union Type in Function
function display1(values:(number|string)){
if(typeof(values)==='number')
    console.log("this is a numbe type");
if(typeof(values)=='string')
    console.log("this is a string type"); 
    
}
display1(123);  
display1("Raghul");  

//Passing Union Type to Arrays
let arrType:number[]|string[];   
    
arrType = [1,2,3,4];  
console.log("Numeric type array:")    
  
for(i = 0;i<arrType.length;i++){  
   console.log(arrType[i]);  
}  
arrType = ["India","America","England"];  
console.log("String type array:")    
  
for(i = 0;i<arrType.length;i++){   
   console.log(arrType[i]);  
}  