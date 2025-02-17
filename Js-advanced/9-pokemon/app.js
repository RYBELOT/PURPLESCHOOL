'use strict';

const request = new XMLHttpRequest();
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto/');
request.send();

request.addEventListener('load', function () {
    const data = JSON.parse(this.responseText);
    console.log(`url для второго запроса ${JSON.stringify(data.abilities[0].ability.url)}`);

    const request = new XMLHttpRequest();
    request.open('GET', data.abilities[0].ability.url);
    request.send();

    request.addEventListener('load', function () {
        const data = this.responseText;
        console.log(`Способность ${JSON.stringify(data.)}`);
    });
});





