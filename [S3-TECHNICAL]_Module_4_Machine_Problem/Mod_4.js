const display = document.getElementById('result');
const buttons = document.querySelectorAll('.buttons button');

let currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            currentInput = '';
            display.value = '';
        } else if (value === '=') {
            try {
                const expression = currentInput.replace('x', '*');
                display.value = eval(expression);
                currentInput = display.value;
            } catch (error) {
                display.value = 'Error';
                currentInput = '';
            }
        } else {
            if (['+', '-', 'x', '/'].includes(value) && ['+', '-', 'x', '/'].includes(currentInput.slice(-1))) {
                return;
            }

            currentInput += value;
            display.value = currentInput;
        }
    });
});