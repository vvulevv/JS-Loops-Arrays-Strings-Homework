"use strict"
function findMostFrequentNum(arr){
    var counter = 0;
    var mostFreq = 0;
    var value;

    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j< arr.length; j++){
            if (arr[i] == arr[j]){
                counter++;
            }
            if (counter > mostFreq){
                mostFreq = counter;
                value = arr[i];
            }
        }
        counter = 0;
    }
    return value + '    (' + mostFreq + ' times)';
}
console.log(findMostFrequentNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]));
console.log(findMostFrequentNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]));
console.log(findMostFrequentNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]));