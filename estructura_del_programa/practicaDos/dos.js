//1
for (let i = 1; i <= 7; i++) {
    let fila = '';
    for (let k = 0; k < i; k++) {
        fila += '#';
    }
    console.log(fila);
}
//2
function crearTableroAjedrez() {
    let tablero = '';

    for (let fila = 0; fila < 8; fila++) {
        for (let col = 0; col < 8; col++) {
            // Alternar entre espacios y "#" dependiendo de la posición
            if ((fila + col) % 2 === 0) {
                tablero += '#';
            } else {
                tablero += ' ';
            }
        }
        tablero += '\n'; // Salto de línea al final de cada fila
    }

    return tablero;
}

console.log(crearTableroAjedrez());

//3
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
} 