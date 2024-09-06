let data = ["01-01-22", "02.02.2321", 123, "34-05-12", "12-24-48", "test"];

console.log(filterDate(data));

function filterDate(incomungArray) {
    let result = [];
    for (let str of incomungArray) {
        let year;
        let month;
        let monthlim;
        let day;
        if (str.length === 8 || str.length === 10 && str[0] >= 0 &&
            str[1] >= 0 && str[3] >= 0 && str[4] >= 0 && str[6] >= 0 &&
            str[7] >= 0 && !(str[2] >= 0) && !(str[5] >= 0)) { // Шаблон по которому проверяем элемент-строку 
            if (str[8] >= 0 && str[9] >= 0) { //проверяем пришел год в ХХ или ХХХХ формате и берем нужное
                year = str[8] + str[9];
            } else {
                year = str[6] + str[7];
            }
                month = str[3] + str[4];
            if (month == '01' || month == '03' || month == '05' || month == '07' || month == '08' || month == '10' || month == '12') {
                monthlim = 31; // проверили сколько дней в месяце должно быть
            } else if (month == '02') {
                year % 4 === 0 ? monthlim = 29 : monthlim = 28; //проверяем високосный ли год
            } else if (month < 12) {
                monthlim = 30; // проверили сколько дней в месяце должно быть
            }
            day = str[0] + str[1];
            if (month <= 12 && day <= monthlim) { // последние проверки месяц <= 12 b дней меньше или равно положенному
                result.push(`${day}-${month}-${year}`);
            }
        }
    }
    return result;
}

