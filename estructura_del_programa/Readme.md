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