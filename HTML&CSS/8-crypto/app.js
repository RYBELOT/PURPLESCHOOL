let firstPass = prompt('Укажите новый пароль','password');
let password = prompt('Введите пароль','password');

function crypto(firstPass) {
     firstPass = Array.from(firstPass).reverse();
     firstPass.push(firstPass.shift());
     return firstPass.toString().replaceAll(',', '');
}

firstPass = crypto(firstPass);

function check(firstPass,password) {
    if (!firstPass || !password){
        return false;
    }
    return firstPass === crypto(password);
}

console.log(`Пароль ${check(firstPass,password)}`);