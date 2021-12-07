class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }

  set diameter(value) {
    this.radius = value / 2;
  }

  get circumference() {
    return this.diameter * Math.PI;
  }

  set circumference(value) {
    this.radius = value / 2 / Math.PI;
  }

  get area() {
    return this.radius * this.radius * Math.PI;
  }

  set area(value) {
    this.radius = Math.sqrt(value / Math.PI);
  }
}

const smallCircle = new Circle(6);

console.log(smallCircle.diameter);
console.log(smallCircle.circumference);
console.log(smallCircle.area);
