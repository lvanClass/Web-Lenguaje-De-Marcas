//Escriu un programa que demani tres números i imprimeixi el més petit.

var lista =[]
var num1 = parseInt(prompt("Dime un numero "))
var num2 = parseInt(prompt("Dime otro numero "))
var num3 = parseInt(prompt("Dime otro numero "))
lista.push(num1,num2,num3)

var nummin = lista[0]
for (var i = 1; i<=lista.length; i++) {
    if (lista[i]<nummin)
        nummin=lista[i]
}

console.log(nummin)