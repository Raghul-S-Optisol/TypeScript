//We know that an array holds multiple values of the same data type. 
//But sometimes, we may need to store a collection of values of different data types in a single variable. 
//Arrays will not provide this feature, but TypeScript has a data type called Tuple to achieve this purpose. 
let tuple_arr = [101, 'Raghul', 9080944441];
console.log(tuple_arr);
// Operations on tuples
//push
console.log(tuple_arr.length);
tuple_arr.push('Intern');
console.log(tuple_arr);
//pop
tuple_arr.pop();
console.log(tuple_arr);
//update
tuple_arr[0] = 102;
console.log(tuple_arr);
//clear
tuple_arr = [];
console.log(tuple_arr);
tuple_arr = [101, 'Raghul', 9080944441];
//destructing the tuple array
let [id, emp, phno] = tuple_arr;
console.log(id, emp);
//
function display(tuple_values) {
    for (let i = 0; i < tuple_arr.length; i++) {
        console.log(tuple_values[i]);
    }
}
display(tuple_arr);
