// //crear un lista que almacene las cinco vocales y luego las 
// //nuestre por consola
// let vocales=["a","e","i","o","u"]
// console.log(vocales)

// //acceder a vocales
// console.log(vocales[3])

// //accedienfo a los elemntos con for
// for (let i=0;i<vocales.length;i++){
//     console.log(vocales[i])
// }

// console.log(vocales.length)

//Trabjao 
/*tengo lista de 7 frutas 
crear un programa que identifique si
en mi lista existe naranja de existir me
mostrara su indice, de no existir me mostrara
un mensaje de error*/ 
// Lista de frutas
// let frutas = ["platano", "fresa", "naranja", "manzana", "mango", "melon", "sandias"];

// // Verificar si "naranja" está en la lista y mostrar el índice o mensaje de error
// if (frutas.includes("naranja")){
//     console.log(frutas.indexOf("naranja"));
// } else {
//     console.log("Error");
// }

//ejercicio 
/* craer 2 funciones que reciban por parametros una lista de numeros una
funcion encontrara que devolvera el numero menor de la lista y la otra funciona encontrara
y devolver el numero mayor de la lista .ojo no usar los mtodos de min y max.*/
// Función para encontrar el número menor
function numeroMe(lista) {
    let menor = lista[0];
    for (let num of lista) if (num < menor) menor = num;
    return menor;
}
function numeroMa(lista) {
    let mayor = lista[0];
    for (let num of lista) if (num > mayor) mayor = num;
    return mayor;
}
let listaDeNumeros = [10, 25, 3, 58, 17, 8, 99];
console.log("Número menor:", numeroMe(listaDeNumeros));
console.log("Número mayor:", numeroMa(listaDeNumeros));

/*crear una funcion que me permite contar la cantidad de vocales "a" que tengo en un lista*/
// Función para contar la cantidad de 'a' en la lista de frutas
function contarA(listaFrutas) {
    let contador = 0;
    // Recorremos cada palabra en la lista de frutas
    listaFrutas.forEach(palabra => {
        contador += palabra.toLowerCase().split('a').length - 1;
    });  
    return contador;
}
let listaDeFrutas = ["platano", "fresa", "naranja", "manzana", "mango", "melon", "sandias"];
console.log(contarA(listaDeFrutas)); // Muestra la cantidad de 'a' en el array
