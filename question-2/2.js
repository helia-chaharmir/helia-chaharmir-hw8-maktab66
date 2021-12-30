function circle(Radius){
    piNumber=3.14159265359;
    Radius=Radius;

    circle.prototype.getArea = function () {
        console.log(piNumber * (Radius^2)) 
    };

    circle.prototype.getPerimeter = function () {
        console.log(piNumber * 2 * Radius) 
    };
}
let Area=new circle(11);
Area.getArea();

let Perimeter=new circle(4.44);
Perimeter.getPerimeter();