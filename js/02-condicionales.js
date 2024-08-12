// condicionales 

/*
if(CONDICIÓN LÓGICA){
todas las líneas que quiero que sucedan si se cumple la condición lógica
}
*/

//Solicitar al usuario ingresar un número y verificar si es positivo

// const numeroSolicitado = parseInt (prompt('Ingrese un número entero'));

// if(numeroSolicitado > 0){
//     document.write(`<p>El número ingresado: ${numeroSolicitado} es positivo`)

// }else{
//     document.write(`<p> El número ingresado: ${numeroSolicitado} no es positivo `)
// }

// Cree un programa que solicite al usuario su edad e indique si puede votar o no.
// desde 18 años hasta 75 años es obligatorio
// si la persona tiene 16 o 17 años es opcional, desde 75 años en adelante también es opcional.
// menores de 16 no pueden votar 

const edad = parseInt(prompt ('Ingrese su edad'));

// AND &&
// OR ||
if(edad >= 18 && edad <= 75){
document.write(`<p> Usted está obligado a votar</p>`);
}else if( edad == 16 || edad == 17 || edad >= 76){
    document.write(`<p>Es opcional votar</p>`)
}else{
    document.write(`<p>No puede votar</p>`)
}

document.write('<p>aqui debo agregar mas código</p>')

const palabra='argentina'

console.log(palabra.length)
console.log(palabra.chartAt(0))
console.log(palabra.chartArt(1))