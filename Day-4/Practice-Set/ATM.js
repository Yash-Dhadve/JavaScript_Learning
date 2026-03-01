/*
Create class ATM:

property: balance

method: deposit(amount)

method: withdraw(amount)
*/

class ATM{
    constructor(){
        this.balance = 0;
    }   

    deposit(amount){
        this.balance += amount;
        console.log(`Deposited: ${amount}, New Balance: ${this.balance}`);
    }   

    withdraw(amount){
        if(amount > this.balance){
            console.log(`Insufficient balance. Current Balance: ${this.balance}`);
        } else {
            this.balance -= amount;
            console.log(`Withdrew: ${amount}, New Balance: ${this.balance}`);
        }   
    }
}

const myATM = new ATM();
myATM.deposit(1000);
myATM.withdraw(500);
myATM.withdraw(600);    

