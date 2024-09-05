let data = ["01-01-22", "02.02.2321", 123, "34-05-12", "12-24-48", "test"];

console.log(parseDate(data));

function parseDate(incomungArray) {
    let resultArr = [];
    for (let str of incomungArray) {
        strToArr = [];
        Array.from(str).forEach((elem) => strToArr.push(elem * 1));
        let year;
        let month;
        let monthlim;
        let day;
        if (strToArr.length === 8 || strToArr.length === 10 && strToArr[0] >= 0 &&
            strToArr[1] >= 0 && strToArr[3] >= 0 && strToArr[4] >= 0 && strToArr[6] >= 0 &&
            strToArr[7] >= 0 && !(strToArr[2] >= 0) && !(strToArr[5] >= 0)) { // Шаблон по которому проверяем элемент-строку 
            if (strToArr[8] >= 0 && strToArr[9] >= 0) { //проверяем пришел год в ХХ или ХХХХ формате и берем нужное
                year = "" + strToArr[8] + strToArr[9];
            } else {
                year = "" + strToArr[6] + strToArr[7];
            }
            if (month == '01' || month == '03' || month == '05' || month == '07' || month == '08' || month == '10' || month == '12') {
                monthlim = 31; // проверили сколько дней в месяце должно быть
            } else if (month == '02') {
                year % 4 === 0 ? monthlim = 29 : monthlim = 28; //проверяем високосный ли год
            } else if (month < 12) {
                monthlim = 30; // проверили сколько дней в месяце должно быть
            }
            day = "" + strToArr[0] + strToArr[1];
            if (month <= 12 && day <= monthlim) { // последняя проверка месяц <= 12 дней меньше или равно положенному
                resultArr.push(`${day}-${month}-${year}`);
            }
        }
    }
    return resultArr;
}


