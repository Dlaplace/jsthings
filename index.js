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
  console.log("this",this);
  console.log("button",button);
  
  var boundFunction = handleClick.bind(null, button);
  boundFunction();
}

//------ spread operator

const arr = ["pizza","hamburguesa","papas","Perro","crispetas"];

const [pizza, ...comida] = arr;
console.log(pizza);
const [,,papas] = arr;
console.log("console de comida: ",comida);
console.log("console de papas: ", papas);

const persona = {
  nombre: "test",
  apellido: "tester",
  ubicacion: {
    pais: "colombia",
    ciudad: "bogotá"
  }
}
console.log(persona)

const {nombre} = persona
console.log("nombre",nombre);

const { apellido: lastname} = persona;
console.log("apellido", lastname);

const personaCopy = {... persona}
console.log("copia",personaCopy);

persona.ubicacion.pais = "medellin";
console.log("copia",personaCopy);


document.getElementById('eventLoopBtn').addEventListener('click', function() {
  console.log('1');
  setTimeout(() => {
      console.log('2');
  }, 2000);
  console.log('3');
});

document.getElementById('shallowCopyBtn').addEventListener('click', function() {
  let objetoOriginal = { nombre: 'Juan', detalles: { edad: 30 } };
  let copiaSuperficial = Object.assign({}, objetoOriginal);

  copiaSuperficial.nombre = 'Ana';
  copiaSuperficial.detalles.edad = 25;

  console.log('Objeto Original:', objetoOriginal);
  console.log('Copia Superficial:', copiaSuperficial);
});

document.getElementById('deepCopyBtn').addEventListener('click', function() {
  let objetoOriginal = { nombre: 'Juan', detalles: { edad: 30 } };
  let copiaProfunda = JSON.parse(JSON.stringify(objetoOriginal));

  copiaProfunda.nombre = 'Pedro';
  copiaProfunda.detalles.edad = 40;

  console.log('Objeto Original:', objetoOriginal);
  console.log('Copia Profunda:', copiaProfunda);
});


document.getElementById('anotherMicrotask').addEventListener('click', function() {
  Promise.resolve().then(()=>{
    console.log("1")
  });
  
  setTimeout(()=> console.log("2"), 200);
  
  queueMicrotask(()=>{
    console.log("3");
    queueMicrotask(console.log("4"));
  });
  
  console.log("5")
});



// Event Handling


document.getElementById('eventHandlerBtn').addEventListener('mouseover', function() {
    alert('Button hover!');
});
// Event Delegation
document.getElementById('parent').addEventListener('click', function(event) {
    if (event.target && event.target.matches('button.child')) {
        console.log('Button clicked:', event.target.textContent);
    }
});


// Event Bubbling
document.getElementById('outer').addEventListener('click', function() {
    console.log('Outer Div Clicked');
});

document.getElementById('inner').addEventListener('click', function(event) {
    console.log('Inner Div Clicked');
    event.stopPropagation(); // Uncomment to stop the bubbling
});

// Accessing the document object
// Manipulating the DOM through the document object
document.getElementById('changeColor').addEventListener('click', function() {
  console.log(document);
    document.body.style.backgroundColor = 'lightblue';
});


// Create a new element
const newElement = document.createElement('p');
newElement.textContent = 'This is a new paragraph created dynamically.';

// Append the new element to the body
document.getElementById('addElement').addEventListener('click', function() {
    document.body.appendChild(newElement);
});

// Change the content of an existing element
document.getElementById('changeText').textContent = 'Text has been changed!';