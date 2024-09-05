let arr = [1,2,3,4,5,6,7,8,9];

let checker = (num) => num % 2 === 0 ? true : false;

function cleaner(arr, checker){
    let result = [];
    for(let elem of arr){
        if(checker(elem)){
            result.push(elem)
        } 
    }
    return result;
}

console.log(`Вводный массив: ${arr} обработанный: ${cleaner(arr, checker)}`);