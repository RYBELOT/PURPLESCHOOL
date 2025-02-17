'use strict';

class Billing {
    amount;

    constructor(amount){
        this.amount = amount;
    }

    calculateTotal (){
        return this.amount;
    } 
}

class FixedBilling extends Billing {
    constructor(amount){
        super(amount);
    }
}

class HourBilling extends Billing {
    constructor(amount, hours){
        super(amount);
        this.hours = hours;
    }

    calculateTotal (){
        return super.calculateTotal() * this.hours;
    } 
}

class ItemBilling extends Billing {
    constructor(amount, items){
        super(amount);
        this.items = items;
    }

    calculateTotal (){
        return super.calculateTotal() * this.items;
    } 
}


