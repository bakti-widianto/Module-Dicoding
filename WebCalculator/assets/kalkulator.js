const calculator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null,
    waitingForSecondNumber: false
};

function updateDisplay() {
    document.querySelector("#displayNumber").innerHTML = calculator.displayNumber;
}

function clearCalculator() {
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.waitingForSecondNumber = false;
}

function inputDigit(digit) {
    if (calculator.displayNumber === '0') {
        calculator.displayNumber = digit
    } else {
        calculator.displayNumber += digit
    }
}

const buttons = document.querySelectorAll(".button");
// console.log(buttons)
for (let button of buttons) {
    // console.log(button)
    button.addEventListener('click', (event) => {
        const target = event.target
        // console.log(target.innerText)

        // console.log(target.classList)
        if (target.classList.contains('clear')) {
            clearCalculator();
            updateDisplay();
            return;
        }


        inputDigit(target.innerText);
        updateDisplay()
    })

}