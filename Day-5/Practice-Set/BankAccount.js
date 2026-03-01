/*
Create class BankAccount
private #balance
deposit(amount)
withdraw(amount)
*/

class BankAccount{
    #balance;

    constructor(){
        this.#balance = 0;
    }

    deposit(amount){
        this.#balance += amount;
        console.log(`Deposited: ${amount}, New Balance: ${this.#balance}`);
    }

    withdraw(amount){
        if(amount > this.#balance){
            console.log(`Insufficient balance. Current Balance: ${this.#balance}`);
        } else {
            this.#balance -= amount;
            console.log(`Withdrawn: ${amount}, New Balance: ${this.#balance}`);
        }
    }
}

const myAccount = new BankAccount();
myAccount.deposit(2000);
myAccount.withdraw(500);
myAccount.withdraw(1600);   