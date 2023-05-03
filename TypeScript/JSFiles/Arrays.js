// one dimension array
let arr = [1, 2, 3, 4, 5];
console.log(arr[0], arr[1]);
// two dimension array
let arr1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; //(or)
let arr2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(arr2[1][1]);
//array by using the Array object.  
let arr3 = new Array("ID", "2200", "S", "ARUN");
for (var i = 0; i < arr.length; i++) {
    console.log(arr3[i]);
}
let arr4 = [1, 2, 3];
let arr5 = [4, 5, 6];
//Create new array from existing array  
let copyArray = [...arr4];
console.log("CopiedArray: " + copyArray);
//Create new array from existing array with more elements  
let newArray = [...arr4, 7, 8];
console.log("NewArray: " + newArray);
//Create array by merging two arrays  
let mergedArray = [...arr4, ...arr5];
console.log("MergedArray: " + mergedArray);
