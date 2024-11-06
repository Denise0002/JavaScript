//haciendo uso de las funciones de tipo closure
//ejerciio1
/*pedir al usuario su nombre  y su edad
, verificar que su edad sea  mayor a 18años
en es caso mostraremos mensajes de bienvenida
mas el nombre que ingreso el usuario*/
// function verificarUsuario() {
//     // Solicitar el nombre y la edad
//     let nombre = prompt("¿Cuál es tu nombre?");
//     let edad = Number(prompt("¿Cuántos años tienes?"));  // Convertir a número directamente
//     // Función interna (closure) para verificar la edad
//     function mostrarMensaje() { 
//         // Condicional utilizando el operador ternario para asignar el mensaje a la variable 'i'
//         let i = (edad >= 18) ? `¡Bienvenido/a, ${nombre}!` : "Lo siento, necesitas ser mayor de 18 años para ingresar."; 
//         alert(i);  // Mostrar el mensaje con alert
//     }
//     // Llamada a la función interna para mostrar el mensaje
//     mostrarMensaje(); 
// }
// // Llamada a la función principal
// verificarUsuario();

//Ejercicio2
/*Crear un programa que pida registrar el nombre de un producto
el usuario podra luego eliminar el producto o actualizar el nombre del producto*/
/*Observacion al realizar la actualizacion podre ver el valor anterior como el valor nuevo*/

function gestionarProductos() {
    let productos = [];  // Arreglo para almacenar los productos
  
    // Función para agregar un producto
    function agregarProducto() {
      let producto = prompt("Registra el nombre del producto:");
      productos.push(producto);  // Agregar el producto al arreglo
      alert(`Producto "${producto}" agregado. Productos registrados: ${productos.join(", ")}`);
    }
  
    // Función para actualizar un producto
    function actualizarProducto() {
      let productoLista = productos.join("\n");
      let productoSeleccionado = prompt(`Selecciona un producto para actualizar:\n${productoLista}`);
  
      if (productos.includes(productoSeleccionado)) {
        let nuevoNombre = prompt(`Ingresa el nuevo nombre para "${productoSeleccionado}":`);
        let indice = productos.indexOf(productoSeleccionado);
        productos[indice] = nuevoNombre;  // Actualizar el nombre del producto
        alert(`Producto actualizado de "${productoSeleccionado}" a "${nuevoNombre}".`);
      } else {
        alert("Producto no encontrado.");
      }
    }
  
    // Función para eliminar un producto
    function eliminarProducto() {
      let productoLista = productos.join("\n");
      let productoSeleccionado = prompt(`Selecciona un producto para eliminar:\n${productoLista}`);
  
      if (productos.includes(productoSeleccionado)) {
        let indice = productos.indexOf(productoSeleccionado);
        let productoEliminado = productos.splice(indice, 1)[0];  // Eliminar el producto
        alert(`Producto "${productoEliminado}" eliminado.`);
      } else {
        alert("Producto no encontrado.");
      }
    }
  
    // Función para ver todos los productos
    function verProductos() {
      if (productos.length === 0) {
        alert("No hay productos registrados.");
      } else {
        alert("Productos registrados:\n" + productos.join("\n"));
      }
    }
  
    // Función para gestionar las opciones
    function opcionesProducto() {
      let i = prompt(
        `¿Qué deseas hacer?\n1. Agregar producto\n2. Ver productos\n3. Actualizar producto\n4. Eliminar producto\n5. Salir`
      );
  
      if (i === "1") {
        agregarProducto();
      } else if (i === "2") {
        verProductos();
      } else if (i === "3") {
        actualizarProducto();
      } else if (i === "4") {
        eliminarProducto();
      } else if (i === "5") {
        alert("¡Adiós!");
      } else {
        alert("Opción no válida.");
      }
  
      if (i !== "5") opcionesProducto();  // Volver a mostrar el menú si no se ha salido
    }
  
    // Iniciar las opciones
    opcionesProducto();
  }
  
  // Llamar a la función principal para comenzar el programa
  gestionarProductos();
  