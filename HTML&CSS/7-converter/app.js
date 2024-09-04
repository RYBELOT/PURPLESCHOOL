let sum = prompt('Введите сумму', 0);
let currency1 = prompt('Из какой валюты?', 'RUB');
let currency2 = prompt('В какую валюту?', 'RUB');

console.log(converter(sum, currency1, currency2));

function converter(sum, currency1, currency2) {
   if (sum && currency1 && currency2) {
      if (currency1.toLowerCase() === currency2.toLowerCase()) {
         return sum;
      } else {
         let c1 = 0;
         let c2 = 0;
         if (currency1.toLowerCase() === 'cny') {
            c1 = 12.5;
         } else if (currency1.toLowerCase() === 'eur') {
            c1 = 98.1;
         } else if (currency1.toLowerCase() === 'rub') {
            c1 = 1;
         } else if (currency1.toLowerCase() === 'usd') {
            c1 = 88.9;
         } else {
            return "Неподдерживаемая валюта";
         }
         if (currency2.toLowerCase() === 'cny') {
            c2 = 12.5;
         } else if (currency2.toLowerCase() === 'eur') {
            c2 = 98.1;
         } else if (currency2.toLowerCase() === 'rub') {
            c2 = 1;
         } else if (currency2.toLowerCase() === 'usd') {
            c2 = 88.9;
         } else {
            return "Неподдерживаемая валюта";
         }
         return (sum * c1) / c2;
      }
   }else{
      return "Заполните все поля!"
   }
}