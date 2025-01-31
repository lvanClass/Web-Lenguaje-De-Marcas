//Escriu un programa que mostri per pantalla el següent patró:
//*
//**
//***
//****
//*****

var longitud = parseInt(prompt("Escribe la longitud"))

for (var i = 0 ; i<=longitud; i++) {
    console.log("*".repeat(i))
}