'use strict';

const calcDisplay = document.querySelector('#calculator__display');
let operatorPressed = false;
let a = 0;
let b = 0;
let c = 0;

const numericButtons = Array
    .from(document.querySelectorAll('.btn__number'))
    .map(num => num.addEventListener('click', () =>
        calcDisplay.value += num.value)
    );

const operatorButtons = Array
    .from(document.querySelectorAll('.btn__operation'))
    .map(op => op.addEventListener('click', () => {
        if (operatorPressed === false) {
            calcDisplay.value += op.value,
                operatorPressed = true
        }
        else {
            operatorPressed = true;
            calculation();
            calcDisplay.value += op.value;
        }
    })
    );


const equalButton = document.querySelector('.btn--equal');
equalButton.addEventListener('click', () => {
    operatorPressed = false;
    calculation();
});



function calculation() {
    a = parseFloat(calcDisplay.value);

    if (calcDisplay.value.search('\\+') > 0) {
        b = parseFloat(calcDisplay.value.substring(calcDisplay.value.search('\\+') + 1, calcDisplay.value.length));
        c = a + b;
    }
    else if (calcDisplay.value.search('-') > 0) {
        b = parseFloat(calcDisplay.value.substring(calcDisplay.value.search('-') + 1, calcDisplay.value.length));
        c = a - b;
    }
    else if (calcDisplay.value.search('×') > 0) {
        b = parseFloat(calcDisplay.value.substring(calcDisplay.value.search('×') + 1, calcDisplay.value.length));
        c = a * b;
    }
    else {
        b = parseFloat(calcDisplay.value.substring(calcDisplay.value.search('÷') + 1, calcDisplay.value.length));
        c = a / b;
    }

    calcDisplay.value = c;
    a = 0;
    b = 0;

}


function clearDisplay() {
    const calcDisplay = document.querySelector('#calculator__display')
    const clearButton = document.querySelector('.btn--c'); {
        clearButton.addEventListener('click', () => {
            calcDisplay.value = '',
                operatorPressed = false,
                a = 0;
            b = 0;
        })
    }
}
clearDisplay();