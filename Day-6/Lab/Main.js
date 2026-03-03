/*
Class: BankAccount

Properties:
accountHolder
balance

Child Class: SavingsAccount
Add interestRate

Method: calculateInterest()
Override method displayDetails()

Test by creating object and calling all methods.
*/

class BankAccount{
    constructor(accountHolder, balance){
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    displayDetails(){
        console.log(`Account Holder: ${this.accountHolder}`);
        console.log(`Balance: ${this.balance}`);
    }
}

class SavingsAccount extends BankAccount{
    constructor(accountHolder, balance, interestRate){
        super(accountHolder, balance);
        this.interestRate = interestRate;
    }

    calculateInterest(){
        return this.balance * this.interestRate / 100;
    }

    displayDetails(){
        super.displayDetails();
        console.log("Interest Rate:", this.interestRate + "%");
        console.log("Calculated Interest:", this.calculateInterest());
    }
}

const acc1 = new SavingsAccount("Yash", 1000, 2);
acc1.displayDetails();