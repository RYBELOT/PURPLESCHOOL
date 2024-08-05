let answ = prompt('Choose your lang: en, de, ru, fra', 'ru')

switch (answ.toLowerCase()){
    case 'ru':
        alert('Здравствуйте!');
        break;
    case 'en':
        alert('hello!');
        break;
    case 'de':
        alert('Guten tag!');
        break;
    case 'fra':
        alert('Bonjour!');
        break;
}