class Vehicle{
    constructor(brand){
        this.brand = brand;
    }

    start(){
        console.log("Vehicle is starting");
    }
}

class Car extends Vehicle{
    constructor(brand){
        super(brand);
    }

    start(){
        console.log("Car is starting...")
    }
}

const car1 = new Vehicle("Toyota");
console.log(`Brand: ${car1.brand}`);
car1.start();