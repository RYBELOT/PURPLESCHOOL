'use strict';

function birthday(data) {
    let birthdayUser = new Date(data);
    let userAge = new Date(birthdayUser.getFullYear()+14, birthdayUser.getMonth(), birthdayUser.getDate());
    return userAge <= Date.now();
}

console.log(birthday('2010-07-05'));