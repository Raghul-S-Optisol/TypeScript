// switch condition with number
let numb = 2;
switch (numb) {
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
var Fruits;
(function (Fruits) {
    Fruits[Fruits["apple"] = 0] = "apple";
    Fruits[Fruits["orange"] = 1] = "orange";
    Fruits[Fruits["grapes"] = 2] = "grapes";
    Fruits[Fruits["pineapple"] = 3] = "pineapple";
})(Fruits || (Fruits = {}));
;
var dir = Fruits.grapes;
function getDirection() {
    switch (dir) {
        case Fruits.apple:
            console.log('APPLE');
            break;
        case Fruits.orange:
            console.log('ORANGE');
            break;
        case Fruits.grapes:
            console.log('GRAPES');
            break;
        case Fruits.pineapple:
            console.log('PINEAPPLE');
            break;
    }
}
getDirection();
