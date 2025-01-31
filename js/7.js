let numeroSecret = Math.floor(Math.random() * 100) + 1;
let intent = null;

console.log("Endevina el número (entre 1 i 100)!");

while (intent !== numeroSecret) {
    intent = parseInt(prompt("Introdueix un número:"), 10);
    if (intent < numeroSecret) {
        console.log("El número és més gran.");
    } else if (intent > numeroSecret) {
        console.log("El número és més petit.");
    } else {
        console.log("Felicitats! Has encertat el número.");
    }
}
