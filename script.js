
let buttons = document.querySelectorAll("button");
let input = document.querySelector("input");

let calculatorScreen = document.querySelector(".calculator-screen");
let calculate = document.getElementById("calculate");

buttons.forEach((button) => {
button.addEventListener('click', (evt) => {
disable_Enable();
calculator(evt.target);
});
});

function disable_Enable() {
if (input.value !== '') {
calculate.disabled = false;
} else {
calculate.disabled = true;
}
}

function calculator(element) {
if (element.value == "=") {
input.value = eval(input.value);
} else if (element.value == "C") {
input.value = '';
} else {
input.value += element.value;
}
}

calculatorScreen.addEventListener("keyup", (evt) => {
if (evt.key == "Enter") {
try {
input.value = eval(input.value);
} catch (error) {
input.value = "Errror";
}
}
});

document.addEventListener("DOMContentLoaded", () => {
input.focus();
});