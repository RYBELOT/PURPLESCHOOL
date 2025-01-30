'use strict';

    const request = new XMLHttpRequest();
    request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto/');
    request.send();

    request.addEventListener('load', function(){
        const data = JSON.parse(this.responseText);
        console.log(`url для второго запроса ${data.abilities[0].ability.url}`);
    });

    const request2 = new XMLHttpRequest();
    request2.open('GET', 'https://pokeapi.co/api/v2/ability/7/');
    request2.send();

    request2.addEventListener('load', function(){
        const data = this.responseText;
        console.log(`Способность ${data}`);
    });




