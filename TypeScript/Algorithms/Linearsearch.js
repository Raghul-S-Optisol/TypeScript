function linearSearch(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            return i; // return the index where the element was found
        }
    }
    return -1; // return -1 if the element was not found
}
// Example usage:
const numbers = [10, 20, 30, 40, 50];
var find = 30;
var val1 = linearSearch(numbers, find);
console.log(`Value ${find} is present at index ${val1}`); // Output: 2
const names = ["Alice", "Bob", "Charlie", "Dave"];
var find1 = "Dave";
const index2 = linearSearch(names, find1);
console.log(`value ${find1} is present at index ${index2}`);
