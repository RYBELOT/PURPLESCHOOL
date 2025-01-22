'use strict';

class Car{
    #make
    #model
    #_run

    constructor(make, model, run){
        this.#make = make;
        this.#model = model;
        this.#run = run;
    }

    set #run(run){
        this.#_run = run;
    }

    get #run(){
        return this.#_run
    }

    get info() {
        return `Марка: ${this.#make} Модель: ${this.#model} Пробег ${this.#run}`
    }
}

let car1 = new Car("Audi","A4",150000);
console.log(car1.info);

let car2 = new Car("BMW","X3",250000);
console.log(car2.info);