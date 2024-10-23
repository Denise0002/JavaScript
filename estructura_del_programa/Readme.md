# Estructura del programa
## Indice
-[interaccion con el usuario](#interaccion-basica-con-el-usuario)

-[declaraciones y expresiones](#expresion-y-declaracion)

-[Bindings enlaces](#bindings-)

-[Entorno](#entorno)

-[Control de flujo](#control-de-flujo)
## interaccion basica con el usuario
Podemos interactuar con el usuario desde JavaScript, utilizando un metodo sencillo que viene implementando en los navegadores.
el metodo es conocido como Window o el metodo de ventana este metodo en realidad es un objeto que contiene o almacena varias funciones entre ellas laasa de mostrar mensajes o pedir datos al usuario.
- *alert*- esta funcion nos muestra un mensaje en pantalla
js
window.alert("mensaje")

-*confirm* -preguntar al usuario y ofrecer dos botones que se traducen en valores booleanos Aceptar (true) y cancelar (false)
js
window.confirm("quieres ser mi enamorado")
//si deseamos capturar la respuesta almacenaremos el codigo en una variable
respuesta=window.confirm("quieres salir del closet!!?")

- *prompt* - pregunta al usuario y espera que se ingrese una respuesta
js
window.prompt("como te llamas?")
// si deseamos almacenar la respuesta usaremos una variable
respuesta=window

## expresiones y declaraciones 
*expresiones* - en javascript un fragmento de codigo que produce un valor es llamada Expresion. tambien se dice que una expresion es el fragmento de una oracion.
js
1
"hola"
3*6
5>7
!true

-*Declaraciones* - en javascript es una oracion
js
!true;
let estado=!false;


## Binding (enlaces)
cuando creamos un valor estos valores son volatiles solo existen en la ejecucion del programa y solo cuando son llamados.
el bindings o enlaces es la manera de javascript requiere los valores y mantiene un estado interno asi como la reutilizacion de valores.
**como usamos los binginds en javascript**
para usar el bingings primero debemos usar la palbara reservada  o `keyword` de nombre `let`, despues debemos darle un nombre para identificar el enlace y luego asignarle el valor
```js
//palabra reservada del enlace
//nombre del enlace
//variable
//este es un enlace que puede apuntar a varios valores
let edadPersona = 34
//si deseamos que el enlace solo apunte aun valor osea un pulpito con unbracit entonces para crear este enlace debemos hacer uso de keyword const
const edad=45
//este enlace siempre apuntara al valor 45 no podra modificar su enlace a otro valor
```

> [!NOTE]
> **Que nombre ponerle a nuestros Enlaces** - El nombre de un enlace debera describir el valor al que esta enlazado, y deberia estar escrita en `camelCase` 

```js
//quiero crear un enlace que tenga el valor de la fecha actual
//incorrecto
let yyyymmdd="20240910"
//correcto
//deben estar juntos las palabras y apartir de las segunda palabra debe ser con mayuscula.
let fechaActual="09-10-2024"

let edadActualAlumno=34
```
## Entorno 
El entorno es conocido como el momento en el se ejecuta o inicia un archivo javascript.
El entorno al crearse no se crea vacio dentro del entorno se crearan las coleccion de enlaces y valores.

**Tarea** -  Averiguar mas sobre la ejecucion en linea de los entornos en javascript
## Control de flujo
una sentencia se ejecuta como si fuera una historia arriba a abajo.
por ejemplo:
```js
let elNumero = prompt("Elige un numero")
console.log("tu numero es la raiz cuadrada de:"+ elNumero*elNumero)
//primero le pide al usuario un numero y depues muestra un mensaje y el cuadrado de ese  numero
```
### Ejecucion Condicional
Hacemos uso de este control de flujo cuando tenemos distintos caminos o distintos mensajes que deseamos mostrar segun una condiccion.
**Como creamos una condicion**
la ejecucion se crea con la palabra reservada (keyword) `if` a continuacion de una `condicion` en llaves `{}` se escribira el cuerpo del codigo que deseo ejecutar en caso la condicion sea `verdad`.
- **condicion simple `if`**
```js
let comparacion=5>4
if true{
    prompt("escribe tu nombre")
}
```
- **Condicion  simple `if` de una sola linea**
```js
if (1+1==2) console.log("es verdad");
```
- **Condicion de doble evaluacion `if else`**
- Existen en los que tendremos que ejecutar un codigo si es verdad pero tambien si es falso. Ejecucion condicional de dos caminos.
```js
  //conjunto de expresiones = ssentencia o declaracion
let edadPersona = 16;
if (edadPersona >= 18){
    console.log("eres mayor de edad");
}else{
    console.log("eres menor de edad");
}
```
- **Condicion multiple `if` `if else`**
Se utiliza cuando se tiene que evaluar y devolver varias opciones o multiples respuestas.
```js
let total_compra=501
if (total_compra >= 50 && total_compra <100){
    console.log(`Descuento del 10% ${total_compra*0.10}`)
}
else if (total_compra >= 100 && total_compra <500){
    console.log(`Descuento del 20% ${total_compra*0.20}`)
}else{
    console.log(`Descuento del 50% ${total_compra*0.50}`)
}
```
- **Condicion multiple `swich`**
Javascript dispone de una opcion para crear estructuras condicionales mulltiples.  `swich` permite crear estructuras mas optimizadas para cubrir un amplio abanico de de posibilidades.
```js
let edad=Number(prompt("ingresa la edad"))
switch (edad){
    case 4:
        console.log("tienes 4 años")
        break
    case 8:
        console.log("tienes 8 años")
        break
    default:
        console.log("tienes:",edad)
        break
}
```
### Bucles
Consideremos el siguiente problema

El ejemplo es valido pero la idea cuando programamos es hacer menos trabajo no mas, en el ejercicio anterior tendriamos problemas si deseamos mostrar todos los numeros menosres a 1000.
Necesitamos una manera de ejecutar un fragment de codigo multiples veces. A esta forma de de control de flujo se le llama `bucle`.
Para crear un bucle tenemos dos formas de hacerlo
1. `ehile` -Para hacer uso de este bucle primero debemos usar la palabra clave `while` este  asu vez como el if debera tener una condicion si esta condicion sea falsa el bucle no sera ejecutada.
```js

```
2. `for` Esta es la manera mas abreviada de crear un bucle en javascript, en el caso de while necesitamos una variable contador lurgo la condicion y finalmente el aumento del contador en el caso de `for` estos tre pasos se realizan em una sola linea.
```js
for (let i=2;i<=20;i++){
    if(i%2==0) console.log(i)
}
```
> [!TIP]
> `while`  se usa cuando no sabemos la cantidad de veces que deseamos ejecutar un codigo, por lo general su finalizacion requiera de una intervencion externa. `for` se usa cuando sabemos la cantidad de veces que deseamos ejecutar un codigo.

> [!NOTE]
> para terminar un bucle se hace uso de la palabra reservada `break`