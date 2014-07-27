"use strict"

function displayProperties(value) {
    var allProperties = [];

    var index = 0;
    for(var i in document) {
        allProperties[index] = i;
        index += 1;
    }

    allProperties.sort();

    return allProperties.join('</br>');
}