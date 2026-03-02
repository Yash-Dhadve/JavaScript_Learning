/*
Create class Animal with method makeSound()
Create class Dog extending Animal
Override makeSound()
 */

class Animal{
    constructor(name){
        this.name = name;
    }

    makeSound(){
        console.log("Animal makes sound...");
    }
}

class Dog extends Animal{
    constructor(name){
        super(name);
    }

    makeSound(){
        console.log("Bow Bow...");
    }
}

const dog = new Dog("Dog");
console.log("Animal: " + dog.name);
dog.makeSound();