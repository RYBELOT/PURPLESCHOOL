let currency = prompt('Выберите валюту EUR/USD', 'usd');
let sum = prompt('Введите сумму в рублях', 0);
currency = currency.toLowerCase();

function converter(currency, sum) {
   if (currency === 'usd') {
      return sum * 85.95;
   } else {
      return currency === 'eur' ? sum * 93.84 : false;
   }
}

console.log(converter(currency, sum));