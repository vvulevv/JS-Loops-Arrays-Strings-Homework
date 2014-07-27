"use strict"
function checkBrackets(expression){
    var openBracketCounter = 0;
    var closeBracketCounter = 0;
    var splittedExpression = expression.split("").join();
    for (var i = 0; i < splittedExpression.length; i++){
        if(splittedExpression[i] === '('){
            openBracketCounter++;
        }
        if(splittedExpression[i] === ')'){
            closeBracketCounter++;
        }
    }
    if (openBracketCounter == closeBracketCounter){
        return 'correct';
    }else{
        return 'incorrect';
    }
}
console.log(checkBrackets('( ( a + b ) / 5 – d )'));
console.log(checkBrackets(') ( a + b ) )'));
console.log(checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )'));
//extra example:
console.log(checkBrackets('(((a+b) - (a*b))/(3*5))+251'));