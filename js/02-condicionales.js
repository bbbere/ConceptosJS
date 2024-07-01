// condicionales 

/*
if(CONDICIÓN LÓGICA){
todas las líneas que quiero que sucedan si se cumple la condición lógica
}
*/

//Solicitar al usuario ingresar un número y verificar si es positivo

const numeroSolicitado = parseInt (prompt('Ingrese un número entero'));

if(numeroSolicitado > 0){
    document.write(`<p>El número ingresado: ${numeroSolicitado} es positivo`)

}else{
    document.write(`<p> El número ingresado: ${numeroSolicitado} no es positivo `)
}