//cuando el archivo index no tiene un archivo javascript
// asociado, su en entorno es el navegador
let cadena="hola"

let suma=45+12

let edadPersona=18
let respuesta=edadPersona>18 ? "Ya es legal" : "eres menor"

//ss
//Funciones de convercion  Number
console.time("Number")

// let elNumero = Number(prompt("Elige un numero"))
let elNumero = prompt("Elije el numero")
console.log(`tu numero es la raiz cuadrada de: ${(+elNumero)+(+elNumero)}`)
console.timeEnd("Number")