let firstPass = prompt('Укажите новый пароль','password');
let password = prompt('Введите пароль','password');

function crypto(firstPass) {
     firstPass = Array.from(firstPass);
     let part1 = firstPass.slice(0, Math.floor(firstPass.length/2)).reverse();
     let part2 = firstPass.slice(Math.floor(firstPass.length/2), firstPass.length).reverse();
     firstPass = part1.concat(part2);
     return firstPass.toString().replaceAll(',', '');
}

function check(firstPass, password) {
    if (!firstPass || !password){
        return false;
    }
    return crypto(firstPass) === crypto(password);
}

console.log(`Зашифрованный пароль: ${crypto(firstPass)} Введенный пароль ${password} Совпадение ${check(firstPass, password)}`);