"use strict"
function findMinAndMax(arr){
    var newArr = arr.sort(function(a, b){
        return a - b;
    })
    return console.log("Min -> " + newArr[0]) + console.log("Max -> " + newArr[newArr.length-1]);
}
findMinAndMax([1, 2, 1, 15, 20, 5, 7, 31]);
findMinAndMax([2, 2, 2, 2, 2]);
findMinAndMax([500, 1, -23, 0, -300, 28, 35, 12]);
findMinAndMax([]);