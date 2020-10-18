class Figure {
  constructor(width, height, name) {
    this.width = width;
    this.height = height;
    this.name = name;
  }

  printFigure() {
    //use template print
    console.log(
      `the name is ${this.name}, height is ${this.height} and width is ${this.width} `
    );
  }

  calculateFigure(x, y) {
    console.log(`area is ${x * y}`);
  }
}
const definePolygon = new Figure(30, 20, "polygon");

definePolygon.printFigure();
definePolygon.calculateFigure(30, 90);

class PolygonY extends Figure {
  constructor(width, height, name, color) {
    super(width, height, name);
    this.color = color;
  }
  printFigure() {
    //use template print
    console.log(
      `the name is ${this.name}, height is ${this.height} and width is ${this.width} and color ${this.color} `
    );
  }
}

const figurePolygonY = new PolygonY(30, 30, "polygony", "red");
figurePolygonY.printFigure();
