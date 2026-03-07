//Javascript has no real interface

class Payment{
    pay(){
        throw new Error("Method must be implemented");
    }
}

class UPI extends Payment{
    pay(){
        console.log("Payment via UPI");
    }
}

let t1 = new UPI();
t1.pay();