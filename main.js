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

// Ejercicio 6.1
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosDobles = numeros.map((numero) => { return numero * 2 });
console.log("Numeros originales: " + numeros);
console.log("Numeros multiplicados por 2: " + numerosDobles);

// Ejercicio 6.2
let pares = [];
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    pares.push(i);
  };
};
console.log("Primeros 10 números pares: " + pares);

//Ejercicio 7.1
const button = document.getElementsByClassName("eje71_button")[0];
button.addEventListener("click", (event) => {
  event.preventDefault();
  let ps = document.getElementsByClassName("eje71_p");
  Array.from(ps).forEach(parrafo => {
    parrafo.classList.add('eje71_p_blue');
  });
});

// Ejercicio 7.2
const button1 = document.getElementsByClassName("eje72_button")[0];
button1.addEventListener("click", (event) => {
  event.preventDefault();
  let texto72 = document.getElementById("eje72_text").value;
  alert("Has ingresado: " + texto72);
})

// Ejercicio 8.1
const ul = document.getElementsByClassName("eje81_li");
Array.from(ul).forEach(li => {
  li.addEventListener("click", () => {
    console.log(li.textContent);
  })
})

// Ejercicio 8.2
const buttonDes = document.getElementsByClassName("eje82_button1")[0];
buttonDes.addEventListener("click", (event) => {
  event.preventDefault();
  const texto82 = document.getElementById("eje82_text");
  texto82.disabled = true;
});

const buttonHab = document.getElementsByClassName("eje82_button2")[0];
buttonHab.addEventListener("click", (event) => {
  event.preventDefault();
  const texto82 = document.getElementById("eje82_text");
  texto82.disabled = false;
});

// Ejercicio 9 
const button91 = document.getElementsByClassName("eje9_button1")[0];
button91.addEventListener("click", (event) => {
  event.preventDefault();
  const email9 = document.getElementById("eje9_mail").value;
  localStorage.setItem("email", email9);
  const p = document.getElementsByClassName("eje9_p")[0];
  p.textContent = "Correo guardado: " + localStorage.getItem("email");
})

const button92 = document.getElementsByClassName("eje9_button2")[0];
button92.addEventListener("click", (event) => {
  event.preventDefault();
  localStorage.clear();
  const p = document.getElementsByClassName("eje9_p")[0];
  p.textContent = "";
})