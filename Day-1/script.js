class Student {
    constructor(name, marks){
        this.name = name;
        this.marks = marks;
    }

    display(){
        console.log(`Name: ${this.name}, Marks: ${this.marks}`)
    }

}

const s1 = new Student("Yash", 95);
s1.display();