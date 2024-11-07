# Prototype
En JavaScript, prototype es un mecanismo que permite agregar propiedades y métodos a los objetos y funciones. Cada función en JavaScript, cuando es utilizada como un "constructor" (es decir, cuando se crea un nuevo objeto usando new), tiene una propiedad llamada prototype. Esta propiedad se utiliza para definir las características y comportamientos que se compartirán entre todas las instancias creadas por esa función constructora.

## ¿Cómo funciona el prototype?
Cuando se crea un objeto a partir de una función constructora, ese objeto tiene acceso a todas las propiedades y métodos que están en el prototype de la función constructora. Esto es lo que permite que todos los objetos de esa "clase" compartan los mismos métodos, pero cada objeto pueda tener su propio estado (propiedades).
```js
// Creamos una función constructora
function Animal(nombre) {
  this.nombre = nombre;
}

// Agregamos un método al prototype de Animal
Animal.prototype.saludar = function() {
  console.log(`Hola, soy ${this.nombre}`);
};

// Creamos una instancia de Animal
const perro = new Animal('Rex');

// Llamamos al método saludar
perro.saludar(); // "Hola, soy Rex"

```