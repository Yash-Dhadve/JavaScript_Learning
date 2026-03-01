/**
Create class Rectangle:
properties: length, width

method: area()
 */

class Rectangle{
    constructor(length, width){
        this.length = length;
        this.width = width;
    }

    area(){
        return this.length * this.width;
    }       
}

const rect1 = new Rectangle(5, 3);
const rect2 = new Rectangle(10, 4);

console.log(`Area of Rectangle 1: ${rect1.area()}`);
console.log(`Area of Rectangle 2: ${rect2.area()}`);    