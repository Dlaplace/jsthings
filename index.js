function Polygon(sides) {
  this.sides = sides;
}

Polygon.prototype.getNumberOfSides = function () {
  return this.sides;
};

Polygon.prototype.describe = function () {
  return `I am a ${this.polygonName} with ${this.getNumberOfSides()} sides.`;
};

function Triangle() {
  Polygon.call(this, 3);
  this.polygonName = 'Triangle';
}

function Fiveside() {
  Polygon.call(this, 5);
  this.polygonName = 'Fiveside';
}

Triangle.prototype = Object.create(Polygon.prototype);
Fiveside.prototype = Object.create(Polygon.prototype);

Polygon.prototype.describe = function () {
  return `I am a ${this.polygonName} with ${this.getNumberOfSides()} sides.`;
};

const pentagon = new Polygon(5);
const triangle = new Triangle();
const newPentagon = new Fiveside();
const equilateral  = new Triangle();
equilateral.describe = function () {
	return `I am a ${this.polygonName} equal sides.`;
};

document.getElementById('chaining-output').innerText += `1. ${pentagon.describe()}`;
document.getElementById('chaining-output2').innerText += `2. ${triangle.describe()}`;
document.getElementById('chaining-output3').innerText += `3. ${newPentagon.describe()}`;
document.getElementById('chaining-output4').innerText += `4. ${equilateral.describe()}`;
