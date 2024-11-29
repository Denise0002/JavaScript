# Introduccion
- **Temario**
  - [comentarios](#comentarios)
  - [la consola](#consola)
  - Naiming
  ## comentarios
  - es la parte de mi archivo de codigo que noes leido ni  ejecutado por el interprete de `js`.
> [!TIP]
> Los comentarios  nos ayudan a
> entender nuestro codigo, y en ocasiones podemos usarlos para  silenciar temporalmente partes del codigo
> ### Tipos de comentarios
> 1. **Una sola linea**
>   ```js
  
    ```
  ## Consola
  La herramienta de Javascrip mas usada dentro de los navegadores es usada para la [depuracion](#depuracion) de nuestro codigo.
  > [!TIP]
  > #### Depuracion, es la tecnica que nos permite mostrar el codigo en las distintas faces de desarrollo, y verificar que el mensaje mostrado sea correcto. y verificando que el codigo no tenga errores de sintaxis de logica o de precaucion.
### Tipos de mensajes de consola
#### 1. Notificadores
mostrar un mensaje por consola
```js
console.log("hola mundo")

```
mostrar un mensaje de estilo informativo
```js
console.info("mensaje informativo")
```
mostrar un mensaje de tipo alerta
```js
console.warn("mensaje de tipo alerta")
```
mostrar mensaje de estilo o tipo error
```js
console.error("mensaje de tipo error")
```
#### 2. Gestion de tiempo
este tipo de mensaje nos sirve para ver la duracion de ejecuccion de nuestro codigo y poder optimizar, para hacer uso de esta herrramienta tenemos que iniciar la consola con un `time()`luego vendrda el codigo de deseamos ver la duracion  y final mente terminar el time de la sonsola con`timeEnd()`
```js
edad=18
if(edad >=18){
  console.log("eres mayor de edad")
}else{
  console.warn("eres menro de edad")
}
```
#### 3. Tablas
Este tipo de mensaje por consolan nos muestra la informacion en una tabla.
solo formateara  a los datso de tipo `array` y `objetos`.
```js
lenguajes=[
  {nombre:"javascript",extencion:".js"},
  {nombre:"python",extencion:".py"},
  {nombre:"php",extencion:".php"}
]
```
[para ver los ejemplos presione aqui](consola.js)
## naiming
Es la tecnica para nombrer variables, funcion y clases dentro de un lenguaje de programacion.
Las variables tienen  reglas muy especificas que debemos seguir a la hora de asignar sus nombres.
- Debemos usar nombres que expliquen que aporta esa variable a nuestro codigo.
### usos incorrecto
- No se pueden usar espacios
> [!WARNING]
> ```js
> #Incorrecto
> con espacio = 45
> ```
- no 
> [!WARNING]
> ```js
> #Incorrecto
> 1numero=45
> ```
- Evitar simbolos y `snake_case`
> [!WARNING]
> ```js
> #Incorrecto
> dame$=45
>  #Incorrecto
>  con_guiones_bajos="no es correcto"
> ```
### Usos correctos
- Debemos usar nombre que expliquen que aporta esa variable a nuestro codigo
- Usar `camelCame`
> [!TIP]
> ```js
> #Correcto
> edadAumno=45
  ```

<!--> slife_gui
=======
# Introduccion
- **Temario**
  - (comentarios)
  - la consola
  - Naiming
  - ##comentarios
  - es la parte de mi archivo de codigo que noes leido ni  ejecutado por el interprete de `js`.
> [!TIP]
> Los comentarios  nos ayudan a
> entender nuestro codigo, y en ocasiones podemos usarlos para  silenciar temporalmente partes del codigo
> ### Tipos de comentarios
> 1. **Una sola linea**
>   ```js
  
    ```
  ## Consola
  La herramienta de Javascrip mas usada dentro de los navegadores es usada para la [depuracion](#depuracion) de nuestro codigo.
  > [!TIP]
  > #### Depuracion, es la tecnica que nos permite mostrar el codigo en las distintas faces de desarrollo, y verificar que el mensaje mostrado sea correcto. y verificando que el codigo no tenga errores de sintaxis de logica o de precaucion.
### Tipos de mensajes de consola
#### 1. Notificadores
mostrar un mensaje por consola
```js
console.log("hola mundo")

```
mostrar un mensaje de estilo informativo
```js
console.info("mensaje informativo")
```
mostrar un mensaje de tipo alerta
```js
console.warn("mensaje de tipo alerta")
```
mostrar mensaje de estilo o tipo error
```js
console.error("mensaje de tipo error")
```
#### 2. Gestion de tiempo
este tipo de mensaje nos sirve para ver la duracion de ejecuccion de nuestro codigo y poder optimizar, para hacer uso de esta herrramienta tenemos que iniciar la consola con un `time()`luego vendrda el codigo de deseamos ver la duracion  y final mente terminar el time de la sonsola con`timeEnd()`
```js
edad=18
if(edad >=18){
  console.log("eres mayor de edad")
}else{
  console.warn("eres menro de edad")
}
```
#### 3. Tablas
// slife_gui