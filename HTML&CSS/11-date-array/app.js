let data = ["01.02.2003", "02/01/2003", "1.2.2003", "11.2.2003", "1.12.2003", "2/11/2003", "12/1/2003", "2/1/2003"];

console.log(filterDate(data));

function filterDate(incArray) {
    let result = [];
    for (let string of incArray) {
        let separator = validateString(string);
        if (separator) {
            let [day, month, year] = string.split(separator);
            if (separator === '/') {
                [day, month] = [month, day];
            }
            if (validateResult(year, month, day)) {
                day.length === 1 ? day = "0" + day : day;
                month.length === 1 ? month = "0" + month : month;
                year.length < 4 ? year = year * 1 + 2000 : year;
                result.push(`${day}-${month}-${year}`);
            }
        } else {
        }
    }
    return result
}

function validateString(incString) {
    if (typeof incString === 'string' && incString.length >= 8 && incString.length <= 10) {
        let seps = Array.from(incString).filter((s) => isNaN(s * 1));
        if (seps.length === 2 && seps[0] === seps[1]) {
            if (seps.includes('.') || seps.includes(':') || seps.includes('-') || seps.includes('/')) {
                return seps[0];
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function validateResult(incYear, incMonth, incDay) {
    let monthLimit = 0;
    if (incYear % 4 === 0 && incMonth === '02') {
        monthLimit = 29;
    } else if (incMonth === '02') {
        monthLimit = 28;
    } else if ((incMonth % 2 != 0 && incMonth < 8) || (incMonth % 2 === 0 && incMonth > 8 && incMonth <= 12)) {
        monthLimit = 31;
    } else if ((incMonth % 2 === 0 && incMonth < 8) || (incMonth % 2 != 0 && incMonth > 8 && incMonth <= 12)) {
        monthLimit = 30;
    }
    if (monthLimit != 0 && incDay <= monthLimit) {
        return true
    } else {
        return false
    }
}
