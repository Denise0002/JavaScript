# VAlores, Tipos y Operadores
## Indice
- [VAlores, Tipos y Operadores](#valores-tipos-y-operadores)
  - [Indice](#indice)
  - [Valores](#valores)
    - [Datos Primitivos](#datos-primitivos)
    - [Numeros(Number)](#numerosnumber)
      - [Numeros especiales](#numeros-especiales)
      - [Aritmetica](#aritmetica)
      - [Cadenas](#cadenas)
      - [concatenacion](#concatenacion)
      - [plantillas literales](#plantillas-literales)
      - [Operadores Unarios](#operadores-unarios)
      - [Valores Boleanos](#valores-boleamos)
## Valores
Imagina un mar de bits
Una computadora moderna tiene mas de 100 mil millones de bits almacendas en su `memoria de trabajo`o`memoria`o `ram `.
Ahora la memoria no volatil o memoria secundaria tiene estos bits de manera ordenada generalmente apilada como si de un eestante de una biblioteca se tratara.

- Tipos (Tipos de datos)
- Operadores.

Cuando nosotros programamos trabajamos en `memoria de trabajo`,para trabajar de manera ordenada con los bts en nuestro mar de bits, jvascript ordena los bits en pequeñas partes o piezas de infromacion a esto se le conoce como `VALORES`.
Cada valor tiene una funcionalidad distinta puede ser un `numero`, `texto` o una `funcion`.

Cuando de hablamos de tipos de datos en JavScript nos referimos a su representacion binaria y al tipo de valor de valor que usamos.

### Datos Primitivos

Son aquellos datos que ya existen no pueden ser creados, actualizados, ni eliminados solo pueden ser llamados para el uso que deseamos darle.

Los datos primitivos en JavaScript son:
### Numeros(Number)
Los valores de tipo numero como es de esperar son numeros y en Javasript se escribe o se hace llamdo de este valor de la siguiente manera:
```js
20
//estamos usando un patron de bits para el numero 20 que existira dentro de memoria de trabjo.
```
> [!TIP] 2^64
```js
//dato numerico de tipo entero
//entero positivo
23
//entero negativo
-23

//decimal positivo
.0

//decimal negativo
-3,6
```
- Nummero de punto flotante decimal fraccion
```js
2.7
0.
.0
```
- Numeros de notacion Cientifica
```js
2.998e8
// 2.998 * 10^8
```
> [!WARNING]
> Cuanado JavaSript realize operaciones con numeros enteros el resultado siempre sera exacta, cuando realice operacion con numeros decimales el resultado perdera presicion por que solo tiene 34 bits para almacenar el numero, esto suele ocurrir con resultados cuyos decimales sean infinitos como el caso del numero `PI(3,14)`.*Es nuestra responsabilidad como programadores hacer el uso de los decimales con aproximaciones para evitar errores*.


> [!TIP]
> Cuando javasript hace trabajo de memoria(cuando crea un patron de bits para almacenar)todos son alamcenados con decimal positivo.

#### Numeros especiales
En JavaSript existen tres valores de tipo numeroque se consideran un dato primitivo numerico de tipo especial.
```js
Infinity
- Infinity
NaN//Not-a-number
//no es un numero
//cuando el resulytado de una operacion es matematicamente imposible.
```
 #### Aritmetica
 La principal operacion que se puedehacer con numeros es la aritmetica
 Para esto tenemos los operadores aritmeticos como:
 - Suma (+).
 - Resta (-).
 - multiplicacion (*).
 - Division (/).
 - Potencia (^).
 - Modulo (%).

**Podemos agrupar operaciones con parentesis () las operacioens que este entre parentesis se ejecutara primero.**

Puedes consultar el archivo de operadores
[aqui](./)
#### Cadenas
el siguiente tipo de dato primitivo es la `cadena` - `string`.
¿para que se usa las cadenas en JavaScript?
- para presentar texto
- se escribe encerrado su contenido entre comillas:
```js
//cadenas con contenido
"soy un texto" //comillas dobles
'tambien soy un texto' //comillas simple
`yo tambien soy` //acento grave 

//cadenas vacia
""
"0"
```
**Problema** - como  representamos un texto entre comillas
para hacer uso de comillas dentro del contenido de una cadena podemos seguir las siguientes recomendaciones:
```js
ENMA SCRIPT 6
//si nuestro texto tine que estar en comillas simples
"'este texto se muestra entre comillas simples'"
//si nuestro texto tiene que estar entre comillas dobles
'"este texto se muestra entre comillas dobles"'
//si nuestro texto tendra tanto comillas dobles como simples
`'esta en comillas simples ', "esta en comillas dobles"`
```
Otra manera de hacer lo antes mencionado es haciendo uso de la barra invertida`\` tambien conocida como `caracter de escape`
hacer uso de este caracter indica que el caracter posterior tendra un significado especial.
```js
"de este texto solo esta \"palabra\" estara en comillas"
```
**Problema** - Deseamos agregar un salto de linea nuestro texto
```js
//solucionamos este problema haciendo uso de los acentos graves
`primera linea
segunda linea`
```
Antes de la incorporacion de `es6` en el uso de acentos graves se utilizaba el caracter de escape`\`
```js
"esta es mi primera linea \n y esta es mmi segunda linea"
```
**Problema** - Deseo tabular un texto
```js

`
este texto no esta tabulado
    este texto si esta tabulado
`
```
ahora tabularemos 

#### Concatenacion
Es unico operador aritmetico que puede se usado por cadenas es el operador de suma (+) puede se usado en de dos o mas cadenas y pasa a llamar  operador de concatenacion. lo que realiza a unir cadena en una sola.
```js
"hola"+" "+"mundo"
```
#### Plantillas literales
Las plantillas literales mencionadas anteriormente con el nombre de acento graves son usadas para mostrar texto literal, tambien nos permite ejecutar codigo javascript dentro de una plantilla literal el codigo o el restado de este codigo sera transformado en un dato de tipo texto y se incluira en la posicion  en que se encuentre.
Para hacer uso de esta funcionalidad debemos usa,
la siguiente expresion `${}`.
```js
//creando una plntilla literal - template literals
``

//usando JavaScript dentro de una plantilla
`la suma de 1+1 es ${1+1}`
```
> [!TIP]
> Se dice literal por que con el formato que codificamos sera mostrado de esa misma forma en la consola.

#### Operadores Unarios
No todos los operadores son simbolos,algunos se escriben como palabras.
Unejemplo es el valor `tipeof`, es operador produce un valor de cadena que indica el tipo del valor que le proporcionamos.

`operadores binarios` se les conoce por que operan sobre dos valores `2*5`
`operador unario` por que solo trabaja con un valor.
```js
//para ver su funcionalidad o el velor que genera siempre debemos mostrarlo en un console.
console.log(typeof 5)
```
#### Valores Boleamos
Este tipo de dato primitivo es util cuando tenemos un valor que distinga solo entre dos posibilidades, como `si` y `no` o `encendido` y `apagado`.
Para este proposito, JavaScript tiene un tipo de dato `Booleano`, tiene solo dos valores, `True` y `False`.
**Que forma de producir valores booleanos tenemos?**
1. **Usando operadores de comparacion**
   Los operadores de comparacion son los siguientes
   - Mayor que (>).
   - Menos que (<).
   - Mayor o igual que (>=).
   - Manor o igual que (<=).
   - Igual a (==).
   - Estrictamente iguañ (===).
   - No es igual a (!=).
2. **Usando los Operadores Logicos**
   Javascript soporta tres operadores logicos
   - and (y) Representacion en javascript `&&`,
   - or (o) Representacion edn Javascript `||`,
   - not (no) representacion en js `!`,
  **observacion**
  Este es un operarador unario que su funcion es invertir el valor que tiene a su derecha `!true` produce `false`.