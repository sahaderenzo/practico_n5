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