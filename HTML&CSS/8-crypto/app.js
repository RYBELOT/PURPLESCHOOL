let firstPass = prompt('Укажите новый пароль','password');
let password = prompt('Введите пароль','password');

function crypto(firstPass) {
     firstPass = Array.from(firstPass).reverse();
     firstPass.push(firstPass.shift());
     return firstPass;
}

firstPass = crypto(firstPass);

function check(firstPass,password) {
    firstPass.unshift(firstPass.pop());
    firstPass = firstPass.reverse().join('');
    return firstPass === password;
}


console.log(`Пароль ${check(firstPass,password)}`);