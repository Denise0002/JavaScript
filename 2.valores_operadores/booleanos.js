//ejemplos con valores valores de comparacion
console.log(5>6)
//esta operacion me genera un valor de tipo boleano

//mayor o igual que 
console.log(6>=6)
//no es igual a
console.log(5 != 7)

// NaN == NaN
console.log(NaN==NaN)


// Averiguar la forma que se realizan las comparaciones con cadena de texto.
// todas las letras mayusculas seran menores a las mayusculas
// Z<a
// Por que javascript compara los codigos unicode cada caracter
//65 - 6
// !>=?
// 33 >=63
console.log("!">="?")
//Ardvark < Zoroaster
console.log("Ardvark" > "Zoroaster")

// en elcaso del operador && su resultado sera verdadero solo si ambos valores son verdaderos
console.log(true && false)
console.log(true && true)
//OBSERVACION: si en ambos valores son verdaderos devolvera el segundo valor
console.log("hola" && "mundo")
//OBSERVACION: en caso que exista un valor verdadero y sno falso devolvera el valor falso.
console.log(0 && "hola")

//OJO: los valores 0. NaN y una cadena vacia "" son considerados false


//en el caso del operador || produce verdadero si cualquier de sus valores dados es verdadero.
console.log(false || false)
console.log(true || false)

//
respuesta="te devuelvo los ositos tiernos"
console.log(respuesta || "tu busqueda no existe")
console.log(0 || "") //falsex2 =2   truex2

// en el caso del operador ! invierte el valor dado
console.log(!true)
console.log(!false)

// usando el operador relacional
//OBSERVACION:solo funciona en objetos o listas
//Averigurar por que sale false en este caso.
console.log("hola" in ["hola","mundo"])