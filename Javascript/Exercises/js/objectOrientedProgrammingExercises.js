// Task:  Create a `Rectangle` class with the following properties:
// - `width` (e.g., 5)
// - `height` (e.g., 10)
// Include methods `getArea` and `getPerimeter` that return the area and perimeter of the rectangle, respectively.

class Rectangle{
    constructor(width, length){
        this.width = width;
        // this.height = height;
        this.length = length;
    }
     getArea(){
        return this.length*this.width
     }
     getPerimeter (){
        return (this.length + this.width)*2
     }
    //  getVolume(length,width,height){
    //     return this.length*this.width*this.height
    //  }

}
let rectal1 = new Rectangle(20,20)
let rectal2 = new Rectangle(20,20)

console.log(rectal1.getArea())
console.log(rectal2.getPerimeter())