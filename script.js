// Pide al usuario que ingrese dos números//
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));

// Pide al usuario que ingrese una operación//
let operator = prompt("Ingrese la operación (+, -, *, /):");

// Evalua la operación y realiza el cálculo //
if (operator === "+") {
  var result = num1 + num2;
} else if (operator === "-") {
  var result = num1 - num2;
} else if (operator === "*") {
  var result = num1 * num2;
} else if (operator === "/") {
  var result = num1 / num2;
} else {
  var result = "Operación no válida";
}

// Mostramos el resultado al usuario//
alert("El resultado es: " + result);