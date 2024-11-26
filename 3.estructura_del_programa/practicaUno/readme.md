# practica uno del capitulo 3
## Instrucciones :
crear un archivo index html con la estructura basica
- Asociar el archivo js de nombre script al index html
- solucionar los siguientes ejercicios

## Ejercicios
### 1. Pedir al usuario dos numeros al realizar el producto de ambos determinar en una condicion de una sola linea si el resultado es mayor a 100.
```js
const [num1, num2] = [Number(prompt("Ingresa el 1er número: ")), Number(prompt("Ingresa el 2do número: "))];
console.log(num1 * num2 > 100 ? "Mayor a 100" : "No mayor a 100");
```
### 2. Pedir el usuario una contraseña que debera ser verificada en una condicion simple si es la contraseña correcta
```js
const contraseña = prompt("Ingresa la contraseña: ");
console.log(contraseña === "miContraseña123" ? "Correcta" : "Incorrecta");
```
### 3. pedir al usuario un numero y determina si es un numero primo.
```js
const num = Number(prompt("Ingresa un número: "));
console.log(num > 1 && (num === 2 || num % 2 !== 0) ? "Es primo" : "No es primo");
```
## RECOMENDACION:
## solo podran usar una condicion simple  con  cuerpo o de una sola linea.