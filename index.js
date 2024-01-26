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


function showcontent(id) {
  const contentToShow = document.getElementById(id);
  if (contentToShow.style.display === "none") {
    contentToShow.style.display = "block";
  } else {
    contentToShow.style.display = "none";
  }
}

var counter = 0;
var counterFunc = (function(){
  var counter=10;
  function add(){
    return counter++
  }
  return add;
})()

// ---------------Call
function greet() {
  console.log('Hello, ' + this.name + '!');
}

var person1 = { name: 'Alice' };
var person2 = { name: 'Bob' };

greet.call(person1);
greet.call(person2); 

//-------------------------Apply
function displayInfo(message) {
  console.log(this.name + ' is ' + this.age + message);
}

var personInfo = { name: 'Charlie', age: 30 };
displayInfo.apply(personInfo, [' years old']); 

// ---------------BIND
var person = {
  name: 'John',
};

 function greet() {
    console.log('Hello, ' + this.name + '!');
}

var greetJohn = greet.bind(person);

greetJohn(); 

var anotherPerson = { name: 'Alice' };
person = anotherPerson;
console.log(person)
var greetOther = greet.bind(person)
greetJohn();
greetOther();


//---------------- THIS applied with Bind
function handleClick(button) {
  console.log('Button clicked:', button.id);
}

function buttonClick(button) {
  var boundFunction = handleClick.bind(null, button);
  boundFunction();
}
