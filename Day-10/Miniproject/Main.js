class BankAccount{

    #balance

    constructor(accountHolder, balance){
        this.accountHolder = accountHolder;
        this.#balance = balance;
    }

    deposit(amount){
        if(amount>0) this.#balance += amount;
        else console.log("Invalid Amount");
    }

    withdraw(amount){
        if(amount<=this.#balance && amount > 0) this.#balance -= amount
        else console.log("Invalid Amount");
    }

    getBalance(){
        return this.#balance;
    }
}

class SavingsAccount extends BankAccount{
    #interestRate

    constructor(name, balance, rate){
        super(name, balance);
        this.#interestRate = rate;
    }

    calculateInterest(){
        return this.getBalance() * (this.#interestRate/100);
    }
}

let acc1 = new SavingsAccount("Yash Dhadve", 1000, 2);

console.log("Account Balance: ",acc1.getBalance()+"\n");
acc1.deposit(500);
console.log("Account Balance After Depositing: ",acc1.getBalance(),"\n");
acc1.withdraw(200);
console.log("Account Balance After Withdraw: ",acc1.getBalance(),"\n");