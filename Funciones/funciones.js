//ejercicios 
// Crear una funcion que me de un saludo de Bienvenida
function saludoBienvenida(){
    console.log("Bienvenido Lord Sama")
}

// let edad=Number(prompt("ingresa la edad"))
// switch (edad){
//     case 4:
//         console.log("tienes 4 años")
//         break
//     case 8:
//         console.log("tienes 8 años")
//         break
//     default:
//         console.log("tienes:",edad,"años")
//         break
// }
// funcion como valor
// let saludo=function(){
//     console.log("Bienvenido")
// }

// saludo()
//funcion despedida
// function despedida(){
//     return "adios"
// }
console.log(despedida())
/*en el caso de la funcion como valor o funciones fecha el
 binding eleva al princicio del archivo la declaracion del
 enlace o variable mas no el valor por eso en estos casos 
 debemos ejecutar las funciones despues de haberlo hecho*/
let saludosaludo=()=>{return "hola amigo"}
console.loog(saludo())
/*en el caso de la funcion declarativa del binding eleva toda }
la funcion al funcion al princio del archivo por eso podemos
ejecutar la funcion desde cualquier parte del archivoincluso
antes de que sea creada*/
function despedida(){
    return "adios"
}