'use strict';

function birthday(data) {
    let now = new Date();
    let userBirthday = new Date(data);
    let userAge = Number(now - userBirthday);
    let validateAge = 14*1000*60*60*24*365.242;
    return userAge > validateAge;
}

console.log(birthday('2015-07-05'));