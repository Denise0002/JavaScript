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
// function numeroMe(lista) {
//     let menor = lista[0];
//     for (let num of lista) if (num < menor) menor = num;
//     return menor;
// }
// function numeroMa(lista) {
//     let mayor = lista[0];
//     for (let num of lista) if (num > mayor) mayor = num;
//     return mayor;
// }
// let listaDeNumeros = [10, 25, 3, 58, 17, 8, 99];
// console.log("Número menor:", numeroMe(listaDeNumeros));
// console.log("Número mayor:", numeroMa(listaDeNumeros));

/*crear una funcion que me permite contar la cantidad de vocales "a" que tengo en un lista*/
// Función para contar la cantidad de 'a' en la lista de frutas
// function contarA(listaFrutas) {
//     let contador = 0;
//     // Recorremos cada palabra en la lista de frutas
//     listaFrutas.forEach(palabra => {
//         contador += palabra.toLowerCase().split('a').length - 1;
//     });  
//     return contador;
// }
// let listaDeFrutas = ["platano", "fresa", "naranja", "manzana", "mango", "melon", "sandias"];
// console.log(contarA(listaDeFrutas)); // Muestra la cantidad de 'a' en el array


// let texto="hola mundo"
// //"hola","mundo"
// let listaTexto=texto.split(" ")
// console.log(listaTexto)
// let lista=["hola","como","estas"]
// //"hola como estas"
// let nuevoTexto=lista.join(", ")
// console.log(nuevoTexto)

//tengo la siguiente url
//www.gatitas.com/?=marina+gold
//crea un programa que me capture solo la query
//"marina gold"

// La URL de ejemplo
// La URL de ejemplo
// let url = "www.gatitas.com/?=marina+gold";
// let cortarurl=url.split("=")
// let obtenerPrimerElemento=cortarurl[1]
// let dividoTextoEnDos=obtenerPrimerElemento.split("+")
// let juntarTexto=dividoTextoEnDos.join(" ")
// // let listaUrl=url.split("=")[1].split("+").join(" ")
// console.log(listaUrl)

// let url = "www.gatitas.com/?=marina+gold";

// // Dividir la URL en dos partes usando "="
// let cortarurl = url.split("=");

// // Obtener la segunda parte, que es "marina+gold"
// let obtenerPrimerElemento = cortarurl[1];

// // Dividir la cadena usando "+"
// let dividoTextoEnDos = obtenerPrimerElemento.split("+");

// // Unir las partes con un espacio
// let juntarTexto = dividoTextoEnDos.join(" ");

// // Mostrar el resultado
// console.log(juntarTexto);  // Imprime "marina gold"

let datosJory=["jory","rodriguez",20,"M"]
let datosJoryObjeto={
    nombre:"jory",
    apellido:"rodriguez",
    edad:20,
    sexo:"M",
    chicas:["Lisa","Maria","Rosa","Fanny"],
    direccion:{
        tipoCallle:"Pasaje",
        nombreCalle:"querobamba",
        numeroVivienda:222,
        numeroDeCuarto:5
    }
}
console.log(datosJoryObjeto.chicas)
console.log(datosJoryObjeto["sexo"])
console.log(datosJoryObjeto.chicas[3])


//ejercicio
//Crear un funcion que me genere un objeto de caracteristicas
//tecnicas de una computadora, el objeto debera tener
//como minimo los siguientes valores
//marca, modelo, procesador, ram, disco y tarjeta de video
const computadora=(marca,modelo,procesador,ram)=>{
    return {
        marca:marca,
        modelo:modelo,
        procesador:procesador,
        ram:ram
    }
}
let objetoPc=computadora("Azus","8Gen","5Ghz","64Ram")
console.log(objetoPc)
//en este caso la clave marca existe en mi objeto por lo tanto su valor
//sera actualizado por INtel
objetoPc["marca"]="INtel"
console.log(objetoPc)
//En este caso la clave tarjeta no existe  en mi objeto por lo
//tanto se creara un elemento con la clave tarjeta y su valor RTX 5600
objetoPc["tarjeta"]="RTX 5600"
console.log(objetoPc)
//Averiguar como eliminar un elemnto de un objeto
delete objetoPc["tarjeta"]; // Elimina la propiedad 'tarjeta' del objeto
console.log(objetoPc);
//Resolver los ejercicios de javascript del 7 al 10