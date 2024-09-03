let array = [10, 40, -5, 10, 0];

console.log(`Исходный массив ${array}`);
console.log(`Отсортирован по возрастанию ${sortArray(array)}`);
console.log(`Отсортирован по убыванию ${sortArray(array, true)}`);

function orderTemplate(firstElement, secondElement, isReverse) {
    if (isReverse) {
       return firstElement < secondElement
    } else {
       return firstElement > secondElement;
    }
}

function sortArray(array, isReverse) {
    let elements = array;
    for (let i = 0; i < elements.length; i++) {
        for (let j = i; j < elements.length; j++) {
            if (orderTemplate(elements[i], elements[j], isReverse)) {
                [elements[i], elements[j]] = [elements[j], elements[i]];
            }
        }
    }
    return elements;
}