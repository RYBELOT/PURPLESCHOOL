'use strict';

function TimerEndYear() {
    const currentYear = new Date().getFullYear();
    const endYear = new Date(currentYear, 11, 31);
    setInterval(()=>{
        const toNewYear = new Date(endYear - Date.now());
        console.log(`До нового года ${toNewYear.getMonth()} месяцев ${toNewYear.getDay()} дней ${toNewYear.getHours()} часов ${toNewYear.getMinutes()} минут ${toNewYear.getSeconds()} секунд`)
    }, 1000);
}

console.log(TimerEndYear());