// Escriu un programa que demani nom, salari i edat i calculi el salari ajustat segons diverses condicions:
// • Si el salari és superior a 2000 euros, no canviarà.
// • Si el salari està entre 1000 i 2000 euros, ambdós inclusos, pujarà un 3% si l’edat és superior a 45 anys i un 10% si l’edat és inferior.
// • Si el salari és menor que 1000 euros i és menor de 30 anys, cobrarà exactament 1100 euros, i si és major de 45 anys, el salari pujarà un 15%, 
// i si l’edat està entre 30 i 45 anys, el salari pujarà un 3%.

var name = prompt("Introduce tu nombre");
var salary = parseInt(prompt("Introduce tu salario"));
var age = parseInt(prompt("Introduce tu edad"));

if (salary > 2000) {
    console.log("Tu salario no cambiará");
} else if (salary > 1000 && salary < 2000) {
    if (age > 45) {
        salary = salary + (salary * 0.03)
        console.log(`Tu salario ha subido un 3%, ahora es de: ${salary}`);
    } else {
        salary = salary + (salary * 0.10)
        console.log(`Tu salario ha subido un 10%, ahora es de: ${salary}`);
    }
} else if (salary < 1000) {
    if (age < 30) {
        salary = 1100
        console.log(`Tu salario ahora es de: ${salary}`);
    } else if (age > 45) {
        salary = salary + (salary * 0.15)
        console.log(`Tu salario ha subido un 15%, ahora es de: ${salary}`);
    } else if (age > 30 && age < 45) {
        salary = salary + (salary * 0.03)
        console.log(`Tu salario ha subido un 3%, ahora es de: ${salary}`);
    }
}