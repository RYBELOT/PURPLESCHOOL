'use strict';

function dice(min, max, even) {
    let result = Math.floor(Math.random() * (max-min) + min);
    if(even){
        return result % 2 === 0 ? result : dice(min, max, even);
    }else{
        return result;
    }
}

function generateNumber(min, max, even){
    let maximum = dice(min, max, even);
    console.log('d' + maximum);
    let result = Math.floor(Math.random() * (maximum-1) + 1);
    return result;
}

console.log(generateNumber(2, 20, true));