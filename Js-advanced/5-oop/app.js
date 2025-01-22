'use strict';

const Character = function(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
}

Character.prototype.speak = function() {
    console.log(`Язык у персонажа ${this.name} - это ${this.language}`);
    return;
}

const Ork = new Character("Орк", "Больг", "Темное наречие");
Ork.hit = function(weapon){
    this.weapon = weapon;
    console.log(`Ударить ${this.weapon}`);
}

const Elf = new Character("Эльф", "Галадриель", "Эльфийский")
Elf.spell = function(spellType){
    this.spellType = spellType;
    console.log(`Применить ${this.spellType}`);
}

console.log(Ork.speak());
console.log(Elf.speak());
console.log(Ork.hit("Булава"));
console.log(Elf.spell("Магия ветра"));