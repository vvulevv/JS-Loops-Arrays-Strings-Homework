"use strict"
function printNumbers(n){
    var str = '';
    if (n <= 0){
        str = 'no';
    }
    for (var i = 1; i <= n; i++){
        if (i % 4 != 0 && i%5 !=0){
            if (i == n || i == (n-1)){
                str = str + i;
                break;
            }
            str = str + i + ", ";
        }
    }
    console.log(str);
}
printNumbers(20);
printNumbers(-5);
printNumbers(13);
printNumbers(50);