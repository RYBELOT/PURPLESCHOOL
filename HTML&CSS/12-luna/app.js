const data = "4569-1213-4367-2612";

console.log(lUnaRule(data));

function lUnaRule(data) {
    let dataNums = [];
    Array.from(data).filter((element) => element * 1 > 0).forEach(element => dataNums.push(element * 1));
    if (data.length === 19 && dataNums.length === 16 && !(data[4] * 1 >= 0) && !(data[9] * 1 >= 0) && !(data[14] * 1 >= 0)) {
        let result;
        for (let i = 0; i < dataNums.length; i++) {
            if (!(i % 2 === 0)) {
                dataNums.splice(i, 1, dataNums[i] * 2);
                dataNums[i] > 9 ? dataNums.splice(i, 1, dataNums[i] - 9) : dataNums[i];
            }
        }
        result = dataNums.reduce((sum, current) => sum + current);
        return (result % 10 === 0);
    } else {
        return "incorrect data"
    }
}

