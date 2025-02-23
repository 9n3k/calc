'use strict';

document.addEventListener("DOMContentLoaded", function () {
    const display = document.querySelector(".display");
    const buttons = document.querySelectorAll("button");
    let currentInput = "";

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const value = this.textContent;

            if (value === "C") {currentInput = "";} 
            else if (value === "=") {
                try {
                    currentInput = eval(currentInput);
                } catch {
                    currentInput = "Error";
                }
            } else {
                currentInput += value;
            }

            display.textContent = currentInput;
        });
    });
});

