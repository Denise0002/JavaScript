//ejemplo de condicion simple
//capturamos la edad y lo comvertimos a numero
// let edad = Number(prompt("ingresa tu edad"))
// console.log(typeof numero)
// if (Number.isNaN(edad)){

// }
//verificamos si el tipo de datos  edad es number realmente
// if (typeof edad == "number"){
//si la comparacion es verdad  mostraremos por consola la 
//la raiz cuadrada de edad
    // console.log(edad*edad)
//};

//ejemplo de una condicion simple de una sola linea
// if (1+1==2) console.log("Es verdad");

/*crear un programa que me pida un numero y me 
muestre por consolasi es un numero par o impar*/
// let numero=Number(prompt("ingresa un numero"))
// if (numero%2==0){
//     console.log("es par");
// }else{
//     console.log("es impar")
// }
//ejercicio 
/*crear un progra q pida al usuario su edad y dependiendo su edad
le daremos una seri de reagalos:
REGALOS:
- si su edad  esta entre 4 a 8 años: te ganaras un chupelin
- si su edad esta entre 9 a 13 años: te ganaras un pelota
- si su edad esta entre 14 a 17años: te ganaras un celular Nokia 6101
- si edad es mayor o igual a 18: te ganaras una medias*/
let edad=Number(prompt("ingresa tu edad"))
if (edad >=4 && edad <=8){
    console.log("chupetin")
}
else if (edad >=9 && edad <=13){
    console.log("pelota")
}
else if (edad >=14 && edad <=17){
    console.log("celular Nokia")
}
else if (edad <=18 && edad >=100){
    console.log("medias")
}else{
    console.log("cajon")
}