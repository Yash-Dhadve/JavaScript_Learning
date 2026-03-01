/*Create class Employee

private #salary

setter must check salary > 0

getter returns salary
*/

class Employee{
    #salary;

    constructor(salary){
        this.salary = salary; 
    }

    set salary(amount){
        if(amount > 0){
            this.#salary = amount;
        } else {
            console.log("Salary must be greater than 0.");
        }   
    }

    get salary(){
        return this.#salary;
    }
}               

const emp1 = new Employee(50000);
console.log(`Employee Salary: ${emp1.salary}`);

emp1.salary = -1000; 
console.log(`Employee Salary after invalid update: ${emp1.salary}`);
emp1.salary = 60000;
console.log(`Employee Salary after valid update: ${emp1.salary}`);
