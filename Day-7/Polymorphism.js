class Animal{
    makeSound(){
        console.log("Animal Sound");
    }
}

class Dog extends Animal{
    makeSound(){
        console.log("Dog barks");
    }
}

const tommy = new Dog()
tommy.makeSound();