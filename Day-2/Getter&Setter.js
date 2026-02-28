class BankAccount {
    #balance = 0;

    constructor(holder, balance) {
        this.holder = holder;
        this.#balance = balance;
    }

    get balance() {
        return this.#balance;
    }

    set balance(amount) {
        if (amount >= 0) {
            this.#balance = amount;
        } else {
            console.log("Invalid amount");
        }
    }
}

const acc = new BankAccount("Yash", 5000);
console.log(acc.balance);   // getter
acc.balance = 3000;         // setter
console.log(acc.balance);   