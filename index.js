// Your code here

class Polygon {
    constructor(sides) {
      this.sides = sides;
    }
  
    get countSides() {
      return this.sides.length;
    }
  
    get perimeter() {
      return this.sides.reduce((sum, side) => sum + side, 0);
    }
  }
  
  class Triangle extends Polygon {
    get isValid() {
      if (this.countSides !== 3) return false;
      const [a, b, c] = this.sides;
      return (a + b > c) && (a + c > b) && (b + c > a);
    }
  }
  
  class Square extends Polygon {
    // Getter method to check if the square is valid
    get isValid() {
      if (this.countSides !== 4) return false;
      return this.sides.every(side => side === this.sides[0]);
    }
  
    // Getter method to calculate the area of the square
    get area() {
      return this.sides[0] ** 2;
    }
  }
  
  // Testing the classes
  
  // Create a Triangle instance
  let triangle = new Triangle([3, 4, 5]);
  console.log(triangle.countSides); // => 3
  console.log(triangle.perimeter);  // => 12
  console.log(triangle.isValid);    // => true
  
  // Create a Square instance
  let square = new Square([5, 5, 5, 5]);
  console.log(square.countSides); 
  console.log(square.perimeter);  
  console.log(square.isValid);   
  console.log(square.area);       