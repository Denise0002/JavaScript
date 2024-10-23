# Funciones
- [Estructura de una funcion](#estrutura-de-una-funcion-como-se-crea-una-función)
- [Tipos de argumentos y Parametros](#tipos-de-argumentos-y-parametros)
- []
Las funciones javascript son `bloques de codigo ejecutable` a los que podemos pasar parametros y operar con ellos.
Nos sirve para modular o (modularizar) nuestro ptograma y estructurarlos en bloques que `realizen una tarea concreta`, deesta manera nuestro codigo es mas legible y mantenible.
las funciones normalmente , al acabar su ejecuccion devuelven un valor, que conseguimos con el parametro `return`.

## Estrutura de una funcion (como se crea una función)
para crear una funcion debemos seguir los siguientes pasos:
1. Hacer uso de keyword `function`
2. Darle un nombre a la funcion.
3. Crear los parametros que resibiran entre parentesis `()`.
4. Crear el cuerpo de la funcion `{}`.
```js
//funcion sin parametros
function miFuncion(){
    console.log("esta es mi funcion")
}
//funcion con un parametro
function miFuncionParametros(a){
    console.log("Tu parametro es",a)
}
//funcion varios parametros
function variosParametros(a,b){
    console.log(a+b)
}
```
**Como ejecutamos una funcion**
para ejecutar una funcion debemos hacer el llamado de la misma haciendo uso unicamente de su nombre y los aprametros que reciba.
```js
//creando una funcion
function saludo(){
    console.log()
}
//ejecucion de la funcion
saludo()

function saludo2(texto){
    console.log("hola: ",texto)
}
//ejecutar
saludo2("jory")
```

> [!NOTE]
> **Reglas para poner el nombre a una funcion:**
Los nombres de las funciones deben representar acciones por lo que deben construirse usando el `verbo` que representa la accion seguido de un `sustantivo` representara a la entidad.

```js
function crearUsuario(){

}
function enviarCorreo(){

}
```
## Tipos de argumentos y Parametros
Es la misma manera como se remplaza n los argumentos con los parametros.
## Argumentos y Paramentos Posicionales
Posicionales se les llama por que los argumentos tomaran aparmetros en el orden que se le pase a la funcion, segun la posicion entre argumento y paarmetro
```js
function sumaNumeros(a,b,c,d){
    let suma=a+b+c+d
    return sum
}
//argumentos posicionales
let respuesta=sumaNumeros(2,6,7,8)
console.log(respuesta)
```
## Argumentos y Parametros Nominales
Se les conoce como argumetos que en su creacion se asocian a un parametro en especifco.
```js
function resgistroAlumno(nombre,apellido,sexo){
    let respuesta=`${nombre}, ${apellido}, ${sexo}`
    return respuesta
}
//Nominal
registroAlumno(sexo="M",nombre="Edwin",apellido="del mar")
//Posicional
registroAlumno("jory","Rodriguez","M")
```

> [!INFO]
> Posicionales en orden y Nominales especificar el parametro y su valor. 