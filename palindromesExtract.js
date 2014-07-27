"use strict"
function findPalindromes(str){

    var words = str.toLowerCase().split(/\W+/);
    words = words.filter(Boolean); // or words = words.filter(function (w){return w!==''});
    var result = [];

    for (var i = 0; i < words.length; i++){
        if (words[i] == words[i].split('').reverse().join('')){
            result.push(words[i]);
        }
    }

    return result.join(', ');
}

console.log(findPalindromes('There is a man, his name was Bob.'));
//extra example:
console.log(findPalindromes('lamal, exe, carevica,   ..     xex, LEL,       ..rqwrqiorqw.rwq,,, oxo'))