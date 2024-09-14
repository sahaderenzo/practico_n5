// Ejercicio 1.2
let a = 1;
let b = 2;
let c = a + b;
console.log("La suma de a(1) y b(2) es:" + c);

// Ejercicio 1.3
let nombre = prompt("¿Cual es tu nombre?");
console.log("Hola, " + nombre + "!");

// Ejercicio 2.1
let d = 10;
let e = 212;
let f = 32;

if (d > e && d > f) {
  console.log("El mayor de los tres números es: " + d);
} else if (e > f) {
  console.log("El mayor de los tres números es: " + e);
} else {
  console.log("El mayor de los tres números es: " + f);
};

// Ejercicio 2.2
let numero = prompt("Ingresa un número y te diré si es par o impar");
if (numero % 2 === 0) {
  console.log("El número " + numero + " es par");
} else {
  console.log("El número " + numero + " es impar");
};

// Ejercicio 3.1
let iterable = 10;
console.log("Ejercicio 3");
while (iterable !== 0) {
  console.log(iterable);
  iterable--;
}

// Ejercicio 3.2
let mayorCien = 0;
do {
  mayorCien = prompt("Ingrese un número mayor a 100");
} while (mayorCien <= 100);
console.log("Ingresaste un número mayor a 100: " + mayorCien);

// Ejercicio 4.1
function esPar(parImpar) {
  if (parImpar % 2 === 0) {
    return true;
  };
  return false;
};

console.log("El número 8 es par: " + esPar(8));
console.log("El número 7 es par: " + esPar(7));

// Ejercicio 4.2
let convertirCelsiusFahrenheit = (celsius) => { return (celsius * 1.8 + 32) };
console.log("30° Celsius son equivalentes a " + convertirCelsiusFahrenheit(30) + "°");

// Ejercicio 5.1
let persona = {
  nombre: "Ana",
  edad: 30,
  ciudad: "Madrid",
  setCiudad: function (nuevaCiudad) {
    this.ciudad = nuevaCiudad;
  }
};

persona.setCiudad("Barcelona");
console.log("Persona: " + persona.nombre + ", Edad: " + persona.edad + ", Ciudad: " + persona.ciudad);

// Ejercicio 5.2
let libro = {
  titulo: "El Quijote",
  autor: "Miguel de Cervantes",
  anio: "1605",
  viejoONO: function () {
    if (this.anio > 10) {
      return true;
    }
    return false
  },
};
console.log("El libro '" + libro.titulo + "' es antiguo: " + libro.viejoONO());