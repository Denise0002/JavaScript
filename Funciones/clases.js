/*Ejercicio con clases
diseñar una clase para mi entidad celular 
tendra como atributos numero,marca ,modelo, capacidad
de bateria*/
/*tendra como metodos :(encender, 
apagarllamarcolgarenviar mensaje)*/

class Celular {
    constructor(numero, marca) {
      this.numero = numero;
      this.marca = marca;
      this.encendido = false;
    }
  
    encender() {
      if (!this.encendido) {
        this.encendido = true;
        console.log(`${this.marca} encendido.`);
      }
      // Si no se enciende, no hace nada (sin else)
    }
  
    apagar() {
      if (this.encendido) {
        this.encendido = false;
        console.log(`${this.marca} apagado.`);
      }
      // Si ya está apagado, no hace nada (sin else)
    }
  }
  
  let celular = new Celular("12345", "Samsung");
  celular.encender();  // Encendido
  celular.encender();  // No hace nada
  celular.apagar();    // Apagado
  celular.apagar();    // No hace nada
  