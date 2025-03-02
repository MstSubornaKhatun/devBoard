// Task Assigned
document.addEventListener("DOMContentLoaded", function () {
    let numberDisplay = document.getElementById("numberDisplay");
    let buttons = document.querySelectorAll(".action-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let currentNumber = parseInt(numberDisplay.innerText);

            if (currentNumber > 1) {
                numberDisplay.innerText = currentNumber - 1;
            }
        });
    });
});

// navbar
document.addEventListener("DOMContentLoaded", function () {
    let numberDisplay = document.getElementById("numberDisplayNavbar");
    let buttons = document.querySelectorAll(".action-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let currentNumber = parseInt(numberDisplay.innerText);

            if (currentNumber > 1) {
                numberDisplay.innerText = currentNumber + 1;
            }
        });
    });
});