const data = "4569-1213-4367-2612";

console.log(lUnaRule(data));

function lUnaRule(strData) {
    if (strData.length === 16 || strData.length === 19) {
        let dataNums = Array.from(strData).map(Number).filter((el) => !isNaN(el));
        if (dataNums.length === 16) {
            for (let i = 0; i < dataNums.length; i++) {
                if (i % 2 === 0 || i === 0) {
                    dataNums.splice(i, 1, dataNums[i] * 2 > 9 ? dataNums[i] * 2 - 9 : dataNums[i] * 2);
                }
            }
            let luna = dataNums.reduce((sum, el) => sum + el, 0);
            let answer = `Карта ${strData} получила результат ${luna % 10 === 0}`;
            return answer;
        } else {
            return "В номере карты должно быть 16 цифр"
        }
    } else {
        return "Введите номер карты в формате ХХХХ-ХХХХ-ХХХХ-ХХХХ или ХХХХХХХХХХХХХХХХ";
    }
}

