# Estructura de datos
## Indice
- [Array](#lista-o-array)
- [Objetos](#objetos)

A partir de los tipos de datos primitivos, javascript nos proporciona los tipos de datos complejos conocido tambien como datos estructurados o estructura de datos.
Para poder trabajar con estos tipos de datos deberemos conocer la forma de representarlos en la memoria de nuestra maquina.
Javascript trabaja con dos tipos de datos estructurados que se trabajan de manera independiente o en conjunto.
Son los siguientes:

## Lista o Array
las listas en javascript son un tipo de datos estructurado que nos permite alamacenar distintos datos primitivos separados por coma , cada tipo de datos que se almacena en una lista se le conoce como elemento. Asi cada elemento estara separado por una coma.
### Creacion
Primero crear una enlace(una variable) y luego le asignaremos la lista que se cree con `corchetes []`, los elementos estaran dentro de los corchetes separados por comas.
```js
//estoy creando una lista vacia
let miLista=[]
//creando una lista de numeros
let numeros=[2,4,7,8,3]
//creando una lista de nombres
let nombres=["edwin","jory","adan","nadine"]
//crear una lista de mixta
let mixta=[4,"hola",false,["hola","mundo"]]
```
### Acceder a un elemento del array
PAra poder accder aun elemento del array debemos entender que javascript asignara por cada eelemento un indice que nos permitira acceder  aun elemento en especifico este indice es incremental y comenzada de cero con el primer elemnto, el ultimo elemento sera la cantidad de elemnentos menos uno.
```js
let numeros=[3,6,7,23,67,8]
console.log(numeros[2])
```
Existe otra manera de acceder a los elementos de una lista, esto se logra recoorriendo cada elemento de una lista esto se logra con un bucle `for`
```js
let nombres=["cristian","jory","orlando","edwin"]
for (let i=0;i<nombres,length,i++){
    console.log(nombres[i])
}
```
### Metodos
Los metodos son funciones que nos permite crear, actualizar y eliminar los elementos de una lista, todas las variables que almacena una lista nos permiten acceder aus metodos poniendo un punto depues del nombre de la variable.
- Metodo para recuperar la longitud de elementos que tiene una lista
```js
let numeros=[2,4,5,6,7]
numeros.length
```
- Metodo para agregar una elmemnto al final de la lista
```js
let vocales=["a"]
vocsles.push("e")
```
- Metodo para eliminar el ultimo elemento de la lista
```js
let vocales=["a","e"]
vocales.pop()
```

### Tarea averiguar los metodos mas usados que  exiten para el tratamiento de listas en jvascript
1. **push():**
- Descripción: Añade uno o más elementos al final del array.
- Uso: arr.push(10);
2. **pop():**
- Descripción: Elimina el último elemento del array.
- Uso: arr.pop();
3. **shift():**
- Descripción: Elimina el primer elemento del array.
- Uso: arr.shift();
4. **unshift():**
- Descripción: Añade uno o más elementos al principio del array.
- Uso: arr.unshift(10);
5. **indexOf():**
- Descripción: Devuelve el primer índice en el que se - encuentra un elemento, o -1 si no lo encuentra.
- Uso: arr.indexOf(10);
6. **includes():**
- Descripción: Verifica si un elemento está presente en el array (devuelve true o false).
- so: arr.includes(10);
7. **forEach():**
- Descripción: Ejecuta una función en cada elemento del array.
- Uso: arr.forEach(num => console.log(num));
8. **map():**
- Descripción: Crea un nuevo array con los resultados de aplicar una función a cada elemento del array original.
- Uso: arr.map(num => num * 2);
9. **filter():**
- Descripción: Crea un nuevo array con todos los elementos que pasen una prueba de condición.
- Uso: arr.filter(num => num > 10);
10. **reduce():**
- Descripción: Aplica una función de acumulación a cada elemento del array, reduciéndolo a un solo valor.
- Uso: arr.reduce((acc, num) => acc + num, 0); (suma todos los elementos)
11. **sort():**
- Descripción: Ordena los elementos del array en su lugar (por defecto en orden alfabético).
- Uso: arr.sort();
12. **slice():**
- Descripción: Crea una copia superficial de una porción del array (sin modificar el original).
- Uso: arr.slice(1, 3); (copia los elementos en los índices 1 y 2)
13. **join():**
- Descripción: Une todos los elementos del array en una cadena de texto.
- Uso: arr.join(", "); (une los elementos con coma y espacio)
14. **concat():**
Descripción: Combina dos o más arrays en uno nuevo.
Uso: arr.concat([4, 5]);
## Objetos
### Creacion
### Acceder a un elemento del objeto
### Metodos 