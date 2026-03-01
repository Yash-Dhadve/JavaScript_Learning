class Animal{
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal{
}

const d1 = new Dog("Tommy");
d1.speak();