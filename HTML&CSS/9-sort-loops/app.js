let arr = [10, 40, -5, 10, 0];

console.log(sort(arr))

function sort(arr) {
    result = [];
    for (let i of arr) {
        let indx = 0;
        for (let j of arr) {
            if (i < j) {
                indx++;
            }
        }
        result.splice(indx, 0, i);
    }
    return result;
}