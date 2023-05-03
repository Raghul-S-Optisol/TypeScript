//optional parameter
function display2() {
    console.log("Hello There!");
}
display2();
//default parameter
function displayName(name, greeting = "Hello") {
    return greeting + ' ' + name + '!';
}
console.log(displayName('Raghul'));
console.log(displayName('Raghul', 'Hi'));
// Rest parameter
function sum1(a, ...b) {
    let result = a;
    for (var i = 0; i < b.length; i++) {
        result += b[i];
    }
    return result;
}
let result1 = sum1(3, 5);
let result2 = sum1(3, 5, 7, 9);
console.log(result1 + "\n" + result2);
//Function Definition  
function add(a, b) {
    return a + b;
}
//Result  
console.log("Addition: " + add("Hello", "Guys"));
console.log("Addition: " + add(30, 20));
