"use strict"
function findMaxSequence(arr) {
    var currentElement = arr[0];
    var currentSeq = 0;
    var maxSeq = 0;
    var result = [];
    var indexMaxSeq;

    for (var i = 0; i < arr.length; i++){
        currentElement = arr[i];
        if (currentElement < arr[i+1]){
            currentSeq++;
        } else {
            if (currentSeq >= maxSeq){
                maxSeq = currentSeq;
                indexMaxSeq = i - currentSeq + 1;
            }
            currentSeq = 1;
        }
    }

    if (maxSeq < 2){
        return 'no';
    } else {

        for (var j = 0; j < maxSeq; j++){
            result[j] = arr[j + indexMaxSeq];
        }

        return result;
    }

}
console.log(findMaxSequence([3, 2, 3, 4, 2, 2, 4]));
console.log(findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]));
console.log(findMaxSequence([3, 2, 1]));