class Car{
    drive(){
        console.log("Driving.....");
    }

    static company(){
        console.log("BMW");
    }
}

Car.company(); // Called using class

const c = new Car();
c.drive(); // Needs object

