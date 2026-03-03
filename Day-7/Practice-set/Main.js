/*
Create class Payment with method pay()
Create class CreditCard overriding pay()
*/

class Payment{

    constructor(amount){
        this.amount = amount;
    }

    pay(){
        console.log(`Paying amount`)
    }
}

class CreditCard extends Payment{

    constructor(amount){
        super(amount);
    }

    pay(){
        console.log(`Paying: ${this.amount}`)
    }
}

let c1 = new CreditCard(100);
c1.pay();