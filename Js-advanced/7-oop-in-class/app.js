'use strict';

// персонаж-родитель
class Character {

    constructor(race, name, language, weapon) {
        this.race = race;
        this.name = name;
        this.language = language;
        this.weapon = weapon;
    }

    info(){
        return `${this.name}${this.race}${this.language}${this.weapon}`;
    }

    speak(){
        return `Язык у персонажа ${this.name} - это ${this.language}`;
    }
}

// оружие
class Weapon {
    constructor(name, damage){
        this.name = name;
        this.damage = damage;
    }

    strike(enemy){
        enemy.receiveDamage(this.damage);
    }
}

//магия(дочерний от оружия)
class Magic extends Weapon {
    constructor(name, damage, magicPrice){
        super(name, damage);
        this.magicPrice = magicPrice;
    }

    spell(enemy){
        enemy.receiveDamage(this.damage);
    }
}

//Дочерние классы орк и эльф
class Ork extends Character {
    #health

    constructor(race, name, language, weapon, health){
        super(race, name, language);
        this.weapon = weapon;
        this.#health = health;
    }

    speak(){
        return `Лок’тар огар!`;
    }

    info(){
        return `Имя: ${this.name}, Раса: ${this.race}, Язык: ${this.language}, Оружие: ${this.weapon.name}, Здоровье: ${this.#health}`;
    }

    receiveDamage(damage){
        if(this.#health > damage){
            this.#health = this.#health - damage;
            return
        }else{
            return 'Орк убит!'
        }
    }

    hit(enemy){
        this.weapon.strike(enemy);
        return this.speak();
    }
}

class Elf extends Character {
    #health
    #magicPower

    constructor(race, name, language, weapon, health, magicPower){
        super(race, name, language, weapon);
        this.#health = health;
        this.#magicPower = magicPower;
    }

    speak(){
        return `Тор илисар'тера'нал!`;
    }

    info(){
        return `Имя: ${this.name}, Раса: ${this.race}, Язык: ${this.language}, Оружие: ${this.weapon.name}, Здоровье: ${this.#health}, Манна: ${this.#magicPower}`;
    }

    receiveDamage(damage){
        if(this.#health > damage){
            this.#health = this.#health - damage;
            return
        }else{
            return 'Эльф убит!'
        }
    }

    addMagic(enemy){
        if(this.#magicPower > this.weapon.magicPrice){
            this.weapon.spell(enemy);
            this.#magicPower = this.#magicPower - this.weapon.magicPrice;
            return this.speak()
        } else {
            return `Недостаточно манны!`
        }

    }
}

//оружие и магия

const knife = new Weapon("Клинок", 10);
const bigSpell = new Magic("Мощное заклятие", 20, 10);

//персонажи 

let feanor = new Elf("Эльф", "Феанор", "Эльфийский", bigSpell, 100, 100);
let gotmog = new Ork("Орк", "Готмог", "Темное наречие", knife, 100);


console.log(feanor.info());
console.log(gotmog.info());
console.log(gotmog.hit(feanor));
console.log(feanor.info());
console.log(feanor.addMagic(gotmog));
console.log(gotmog.info());



