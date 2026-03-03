/*
Class: Employee
Method: calculateSalary()

Child Classes:
FullTimeEmployee
PartTimeEmployee

Each must calculate salary differently.

Create parent reference (if possible in language)
Call method and observe runtime behavior.
 */

class Employee{
    constructor(salary){
        this.salary = salary;
    }

    calculateSalary(){
        return 0;
    }
}

class FullTimeEmployee extends Employee{
    constructor(monthlySalary, bonus){
        super(monthlySalary);
        this.bonus = bonus;
    }

    calculateSalary(){
        return this.salary+this.bonus;
    }
}

class PartTimeEmployee extends Employee{
    constructor(hoursWorked, hourlyRate){
        super(0);
        this.hoursWorked = hoursWorked;
        this.hourlyRate = hourlyRate;
    }

    calculateSalary(){
        return this.hoursWorked*this.hourlyRate;
    }
}

let e1 = new FullTimeEmployee(5000,500);
let e2 = new PartTimeEmployee(80,20);

console.log("Salary of employee e1: "+ e1.calculateSalary());
console.log("Salary of employee e2: "+ e2.calculateSalary());

