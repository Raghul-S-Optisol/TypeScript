// switch condition with number
let numb=2
switch (numb){  
    case 1: {  
        console.log("case 1");  
        break;  
    }  
    case 2: {  
        console.log("case 2");  
        break;  
    }  
    case 3: {  
        console.log("case 3");  
        break;  
    }  
      
    default: {  
        console.log("default statement");  
        break;  
    }  
}  

//with Enum
enum Fruits {  
    apple,orange,grapes,pineapple     
};  
var dir: Fruits = Fruits.grapes;  
  
function getDirection() {  
    switch (dir) {  
        case Fruits.apple: console.log('APPLE');  
            break;  
        case Fruits.orange: console.log('ORANGE');  
            break;  
        case Fruits.grapes: console.log('GRAPES');  
            break;  
        case Fruits.pineapple: console.log('PINEAPPLE');  
            break;  
    }  
}  
getDirection();  
