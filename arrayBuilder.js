"use strict"
function createArray(number){
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    for (var index in arr){
        arr[index] *= 5;
    }
    return console.log(arr);
}
createArray();