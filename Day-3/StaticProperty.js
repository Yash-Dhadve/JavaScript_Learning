class Student{
    static count = 0;

    constructor(name){
        this.name = name;
        Student.count++;
    }
}

const s1 = new Student("Yash");
const s2 = new Student("Om");
const s3 = new Student("Lara");
const s4 = new Student("Anuj");

console.log(`Total Students: ${Student.count}`)