'use strict';

let arrObj = [
    {id: 1, name: 'Вася' },
    {id: 2, name: 'Петя' },
    {id: 1, name: 'Вася' },
];

const uniqArr = function (data) {
    let array = [];
    for (let object of data){
        let {id, name} = object;
        array.push(id, name);
    }
    let result = new Set(array);
    return result;
}

console.log(uniqArr(arrObj)); 