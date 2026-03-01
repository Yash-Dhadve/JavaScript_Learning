/*
Create class Bank:
static property bankName = "SBI"

instance property accountHolder

create 2 objects

print bank name using class
*/ 

class Bank{
    static bankName = "SBI"

    constructor(accountHolder){
        this.accountHolder = accountHolder;
    }
}

const acc1 = new Bank("Yash");
const acc2 = new Bank("Lara");

console.log("Account Holder:", acc1.accountHolder);
console.log("Bank Name:", Bank.bankName,"\n");

console.log("Account Holder:", acc2.accountHolder);
console.log("Bank Name:", Bank.bankName);