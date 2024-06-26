//Comentario de una línea

/*Comentario
Largo
y 
de varias 
líneas*/

//Declarar una variable (var - let - const)

let anioActual = 2024;
console.log(anioActual)

//Modificamos el contenido de una variable 

anioActual = 2024 + 2;
console.log(anioActual);
document.write(anioActual)
document.write("<p class='textoResaltado'>Esto es un parrafo</p>");
document.write('Año Actual:'+ (anioActual-2));

//Ventanas emergentes
//alert('Hola mundo');

const url = 'https://universe.rollingcodeschool.com/';

document.write ('<br>' + url);

//url='Hola mundo 2';
//console.log(url);

//Pedir al usuario un numero
const numero1 = parseInt(prompt ('Ingresa un número'));
console.log(numero1);
const resultado = numero1+20;
console.log(resultado);
