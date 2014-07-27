"use strict"
function findMostFreqWord(str){
    var splittedStr = str.toLowerCase().split(/[\W+]/);
    var wordCount = 0;
    var currentWord = splittedStr[0];
    console.log(splittedStr);
    for (var i = 1; i < splittedStr.length; i++){
        if(currentWord == splittedStr[i]){
            wordCount++;
        }
    }

}
findMostFreqWord('in the middle of the night');