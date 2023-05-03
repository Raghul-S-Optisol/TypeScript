// ISANAGRAM PROGRAM
checkStringsAnagram("listen", "silent");
function checkStringsAnagram(a, b) {
    let len1 = a.length;
    let len2 = b.length;
    if (len1 !== len2) {
        console.log('Invalid Input');
        return;
    }
    let str1 = a.split('').sort().join('');
    //console.log(str1);
    let str2 = b.split('').sort().join('');
    //console.log(str2);
    if (str1 === str2) {
        console.log("Is anagram");
    }
    else {
        console.log("Not an anagram");
    }
}
//PALINDROME
var s = 'dad';
var len = s.length;
str = "";
for (i = len; i >= 0; i--) {
    str = str + s.charAt(i);
}
if (s == str)
    console.log("palindrome");
else
    console.log("Not a palindrome");
//STRING METHODS
str = "hello welcome you all";
console.log(str.charAt(3));
console.log(str.indexOf('h'));
console.log(str.lastIndexOf('e'));
console.log(str.search('all'));
console.log(str.match('a'));
console.log(str.replace("hello", "Hello"));
console.log(str.substring(0, 5));
console.log(str.slice(0, 5));
console.log(str.toLowerCase());
console.log(str.toUpperCase());
arr = str.split('').join(); // split into array and join() the array to string
console.log(arr);
