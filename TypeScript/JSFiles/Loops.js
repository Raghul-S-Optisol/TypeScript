//while loop
num = 4;
let factorial = 1;
while (num >= 1) {
    factorial = factorial * num;
    num--;
}
console.log("The factorial of the given number is: " + factorial);
// do-while loop
n = 10;
do {
    console.log(n);
    n++;
} while (n <= 15);
//for loop
var fact = 1;
num = 4;
for (i = 1; i <= num; i++) {
    fact = fact * i;
}
console.log("The factorial of the given number", num, "is: " + fact);
// TypeScript for..of loop
arr = [1, 2, 3, 4, 5];
for (var values of arr) {
    console.log(values);
}
//
let str = "Welcome Guys";
for (let index in str) {
    console.log(`Index of ${str[index]}: ${index}`);
}
//forEach loop
let sub = ['English', 'Tamil', 'Maths'];
let Subjects = [];
sub.forEach(function (item) {
    Subjects.push(item);
});
console.log(Subjects);
