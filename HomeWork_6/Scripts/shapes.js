class Shape {
    constructor(name){
        this.name = name;
    }
    area(){
        return this.name;
    }
}

class Circle extends Shape{
    constructor(name, radius){
        super(name, radius);
        this.radius = radius;
    }

    getRadius(){
        return this.radius;
    }
}

class Rectangle extends Shape{
    constructor (name, width, height){
        super(name, width, height);
        this.width = width;
        this.height = height;
    }
    getWidth(){
        return this.width;
    }
    getRectangleHeight(){
        return this.height;
    }
}

class Triangle extends Shape{
    constructor(name, base, height){
        super(name, base, height);
        this.base = base;
        this.height = height;
    }
    getBase(){
        return this.base;
    }
    getTriangleHeight(){
        return this.height;
    }
}
 
let areaCalculation = areaCalculation ("Area calculation not implemented for generic shape.");

let shape = new Shape("Math.PI * radius * radius");
let rectangle = new Rectangle("width * height");
let triangle = new Triangle("base * height) /2");

console.log(Shape);
console.log(Rectangle);
console.log(Triangle);


