"use strict"
function findMaxSequence(arr){
    var currentElement = arr[0];
    var result = [];
    var maxSequence = 0;
    var length = 1;
    var value = '';
    if (arr.length == 1){
        result.push(arr[0]);
    } else {

        for (var i = 0; i < arr.length; i++){
            currentElement = arr[i];

            if(currentElement === arr[i + 1]) {
                length++;

                if (maxSequence <= length) {
                    maxSequence = length;
                    value = arr[i];

                }
            } else {
                length = 1;
            }
        }

        for (var j = 0; j < maxSequence; j++){
            result[j] = value;
        }

    }

    return console.log(result);
}
findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
findMaxSequence(['happy']);
findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']);