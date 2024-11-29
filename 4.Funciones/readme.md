# INDICE
- [Estructura de una funcion](#estrutura-de-una-funcion-como-se-crea-una-función)
- [Tipos de argumentos y Parametros](#tipos-de-argumentos-y-parametros)
- [Argumentos y Paramentos Posicionales](#argumentos-y-paramentos-posicionales)
- [Argumentos y Parametros Nominales](#argumentos-y-parametros-nominales)
- [Tipos de funciones por su notacion](#tipos-de-funciones-por-su-notacion)
- [Funciones como valor](#funciones-como-valor)


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
> Posicionales en orden y Nominales especificar el parametro y su valor

## Tipos de funciones por su notacion
### Funciones como valor
En este caso se crea un funcion como si fuera un valor de un enlace.
```js
let saludo=function(){
    console.log("Bienvenido")
}

saludo()
```
En este caso el nombre de la funcion sera el nombre que le pongamos al enlace y para llamarlo o ejecutarlo debemos poner el nombre del enlace mas los parentesis.
Al igual de una funcion clasica podemos tambien pasarle parametros

### Funcion domo declaracion
Se le conoce como funcion declarativa a la manera clasica de como creamos uan funcion.
```js
function saludo(){
    return"saludo a todos"
}
console.log(saludo())
```
### Funcion de flecha (arrow function)
Esta funcion es introducida a partir de la version de ecma script 5 `es5`
Se implemento para lacreacion y ejecucion rapida y ams entendible de las funciones.
La funcion flecha evita la `verbosidad` en JavaScript
> [!NOTE]
> `verbosidad` o `verboso` se utiliza en la programacion para referirce a un codigo que necesita demasidas lineas de codigo o necesita cumplir estrictamente una serie de reglas que podemos comprar la `verbosidad` a un texto demasiado extenso o redundante.
Se crea de misma manera que una funcion como valor , eso quiere decir que la funcion flecha sera el valor de un enlace.
La funcion flecha tiene la siguiente estructura.
El parametro seguido del simbolo flecha `=>`  y del cuerpo de ser necesario o solo de codigo que se retornara.
```js
function saludo(){
    return "hola mundo"
}
console.log(saludo())

let saludo=()=>("Hola mundo")
console.log(saludo())

let mensaje=texto=>console.log("hola",texto)
    console.log(mensaje("hola amigo"))

//en el caso de tener mas de un parametro y ejecutar mas de una linea de codigo
let registroUsuario=(nombre,apellido)=>{
    let alumno= `${nombre}, ${apellido}`
    return alumno
}

console.log(registroUsuario("edwin","chamo"))
```
### Diferencias
las diferencias que tenemos al momento de crear una funcion declarativa, funcion como valor y flecha 
### el  binding
es una tecnica que guarda las funciones y variables (enlaces) sube al principio de la declaracion no el valor a la cabecera del archivo javascript
```js
function
```
## La Pila de llamadas (Call Stack)
Es una tecnica que se usa para controlar de manera correcta la ejcucion de una funcion.
**Averiguar sobre LIFO** algoritmo de estructura de datos de datos, tecnica
```js
//program que haga una ensala
```

## CLOUSE o Funciones de Cierre(Funciones que retornan Funciones)
Un `closure` es una funcion que encapsula una serie de variables y definiciones locales que unicamente seran accesibles si son devueltas con el keyword `return`.
Antes de uqe aparesca la version `ecma 6` los `closure` eran un patron creacional que nos permitia modularizar nuestro codigo en lugar de usar las `clases`, que eran populares en otros lenguajes pero que en javascript  aun no lo implementaba.
```js
//una  funcion que retorna otra funcion(por lo general es una funcion anonima)
//funcion clasica
function retornaValor(n){
    return n+1
}
//llamando a la funcion clasica
retornaValor(10)


//funcion closure
function retornaValor(){n
    return function(){
        return n+1
    }
}
//llamando  a la funcion closure
retornaValor(10)()
```
> [!NOTE]
> Las funciones `closure` son usadas por que pueden mantener el valor de sus enlaces o variables locales en todo el proceso de la ejecucion de su funcion padra por cada llamada que se le realize.

### Clousure tipo clase
```js
function contador(){
    this.contador=0
    this.incre=function(){
        this.contador++
    }
    this.decre=function(){
        this.contador--
    }
}
//realizamos la instancia
let count1=new contador()
count1.contador
for(let i=0;i<5;i++){
    count1.incre()
}
```
> [!NOTE]
> la funcion `closure` de tipo clase no hace uso de `return` den sus funciones al hacer uso de `this` cada funcion o varable estara anlazada al objeto que se cree.


> [!WARNING]
> el problema principal de este tipo de funion, es que cuando creamos un nuevo objeto a partir de la funcion tipo clase, reservara espacio en la memoria para toda la clase y su valor creados eso quiere decir variable y funciones, cada vez que llamamos a una funcion esta se replica en la mempria.

## Prototype (Tarea averiguar y asus ejemplos)
para crear un prototype tendremos que crear primero nuetra funcion principal que es la encargada de almacenar nuestras variables locales con las que trabajamos.
Luego accederemos al prototype de nuestra funcion creada y en valor o variable de tipo objeto le indicaremos las funciones que tendra nuestra funcion principal que interactuara con nuestras variables locales.
```js
function Contador(nombre){
    this.count=0
    this.nombre=nombre
}
Contador:prototype={
    incremento:function(){this.count++},
    decremento:function(){this.count--},
    mostrarDatos:function(){return `${this.count}, 
    ${this.nombre}`}
}
```
> [!NOTE]
> Es una convencion usar como nombre nuestra  funcion principal, 1. que debe ser singular, 2. que es PalcalCase

### TAREA
## Recursion en funciones
La recursión es un concepto en programación donde una función se llama a sí misma para resolver un problema. En otras palabras, una función recursiva realiza un llamado a sí misma con un argumento modificado hasta que se alcanza un caso base, que es la condición que detiene las llamadas recursivas.
```js
function factorial(n) {
  // Caso base: si n es 0 o 1, devuelve 1
  if (n === 0 || n === 1) {
    return 1;
  }
  // Caso recursivo: n * factorial(n-1)
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
```
//binding funcion creada en la cabecera
```js
function factorial(n){
    if n==1{
        return 1
    }
    return n*factorial(n-1)
}
```
## Funciones Callbacks
¿Qué es una función de callback en JavaScript?
En JavaScript, una función de callback es simplemente una función que se pasa como argumento a otra función y se ejecuta (o se "llama") en un momento posterior, generalmente después de que se haya completado una operación o tarea.
Las funciones de callback se utilizan principalmente para manejar operaciones asíncronas o tareas que tardan un tiempo en completarse, como las peticiones de red (AJAX), la lectura de archivos, o la temporización (como en setTimeout o setInterval).
```js
// Definimos una función que acepta un callback
function saludo(nombre, callback) {
  console.log("Hola, " + nombre);
  callback(); // Llamamos al callback después de saludar
}

// Definimos el callback
function despedida() {
  console.log("Adiós!");
}

// Pasamos el callback `despedida` a la función `saludo`
saludo("Juan", despedida);
```

```js
function uno(){
    return "soy uno"
}
function dos(){
    return "soy dos"
}
console.log(uno())
console.log(dos())

//con callback
funcionuno(callback){
    console.log("soy uno")
    callback()
} 

uno(function(){console.log("soy dos")})

```
**Entidad:** Es una objeto que se puede secribir que tengan atributos y acciones.
1. nombre de la clase
2. Identificar atributos(variables)
3. Identificar metodos(funciones)

# Clases
Las clases en javscript llegan en la vercion `EMAScript 6`, javascript no tenia al igual que otros lenguajes de programacion oriejntados a objetos las `clases` ya que js se enfocaba en la `programacion funcional`, sin embargo con la llegada es `ES6`, javascript adopta ser un lenguaje de `programacion multiparadigma`, entre ellos la programacion orientada a objetos con la llegada de las `clases`.
## Estructura de una Clase
Una clase esta separada de tres grandes secciones.
1. El nombre de la clase que debera ser en singular y  en PascalCase.
2. Debera tener atributos (variables y valores) estos deberan ser sustantivos y estar escritos en camelCase.
3. Debera tener metodos (acciones , funciones) estos deberan ser verbos u estar esritos en camelCase.
```js
class Computadora{
    //atributos
    constructor(marca){
        this.marca=marca
        this.color=""
        this.tipoCase="tower"
    }
    //metodos
    encender(){
        return "estoy encendiendo"
    }
    apagar(){
        return "estoy cerrando secion y guardando mi informacion antes de apagar"
    }
    escribir(){
        return "escribiendo mi informe"
    }
    jugar(){
        return "juagndo little nighmares"
    }
}
//instanciar
let miPc=new Computador("gigabyte")
miPc.encender()
```