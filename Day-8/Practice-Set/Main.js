/*
Create abstract-like class Employee
Method calculateSalary() must be implemented in child
Create child class Manager
*/

class Employee{
    constructor(){
        if(this.constructor === Employee){
            throw new Error("Cannot instantiate abstract class");
        }
    }

    calculateSalary(){
        throw new Error("Method 'calculateSalary()' must be implemented.");
    }
}

class Manager extends Employee{
    constructor(monthlySalary, bonus){
        super();
        this.monthlySalary = monthlySalary;
        this.bonus = bonus;
    }

    calculateSalary(){
        return this.monthlySalary+this.bonus;
    }
}

let e1 = new Manager(10000,500);
console.log(`Salary: ${e1.calculateSalary()}`);
