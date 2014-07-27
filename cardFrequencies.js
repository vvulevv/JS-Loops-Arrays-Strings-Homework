"use strict"
function findCardFrequency(value) {
    var allCards = value.match(/\w+/gi);

    var cards = [];

    for (var i = 0; i < allCards.length; i++) {
        if (allCards[i] in cards) {
            cards[allCards[i]]++;
        } else {
            cards[allCards[i]] = 1;
        }
    }

    for(var j in cards) {
        var percent = cards[j] / allCards.length * 100;
        console.log(j + ' -> ' + percent.toFixed(2) + '%');
    }
}
findCardFrequency('8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦');
findCardFrequency('J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠');
findCardFrequency('10♣ 10♥');