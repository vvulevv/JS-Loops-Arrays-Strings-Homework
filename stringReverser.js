"use strict"
function reverseString(str){
    var reversedString = str.split("").reverse().join("");
    return reversedString;
}
console.log(reverseString('sample'));
console.log(reverseString('softUni'));
console.log(reverseString('java script'));