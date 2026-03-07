/* 
Create class Shape with method draw() (throw error)
Create class Circle implementing draw()
*/

class Shape{
    draw(){
        throw new Error("Method must be implemented");
    }
}

class Circle extends Shape{
    draw(){
        console.log("This is Circle");
    }
}

let c1 = new Circle();
c1.draw();