/*
Create a class BankAccount with:
accountHolder
balance
Add method checkBalance()
*/

class BankAccount{

    constructor(accountHolder, balance){
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    checkBalance(){
        return this.balance;
    }
}

const acc1 = new BankAccount("Yash", 1000);
console.log(`Name: ${acc1.accountHolder}, Balance: ${acc1.checkBalance()}`)