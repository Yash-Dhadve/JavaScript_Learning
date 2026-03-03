/*
Create class Vehicle with method start()
Create class Bike overriding start()
*/

class Vehicle{
    start(){
        console.log("Starting Vehicle...")
    }
}

class Bike extends Vehicle{
    start(){
        console.log("Starting Bike...")
    }
}

let v1 = new Vehicle()
let b1 = new Bike()

v1.start()
b1.start()

