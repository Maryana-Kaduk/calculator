const firstNumberBox = document.querySelector('#firstNumber');
const secondNumberBox = document.querySelector('#secondNumber');

const plusButton = document.querySelector('#plus');
const minusButton = document.querySelector('#minus');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');

const result = document.querySelector('#answer');

plusButton.addEventListener('click', function() {
    if (isNaN(parseFloat(firstNumberBox.value)) === false && isNaN(parseFloat(secondNumberBox.value)) === false) {
        result.textContent = parseFloat(firstNumberBox.value) + parseFloat(secondNumberBox.value);
    } else {
        result.textContent = 'введіть числа';
    };
});

minusButton.addEventListener('click', function() {
    if (isNaN(parseFloat(firstNumberBox.value)) === false && isNaN(parseFloat(secondNumberBox.value)) === false) {
        result.textContent = parseFloat(firstNumberBox.value) - parseFloat(secondNumberBox.value);
    } else {
        result.textContent = 'введіть числа';
    };
});

multiplyButton.addEventListener('click', function() {
    if (isNaN(parseFloat(firstNumberBox.value)) === false && isNaN(parseFloat(secondNumberBox.value)) === false) {
        result.textContent = parseFloat(firstNumberBox.value) * parseFloat(secondNumberBox.value);
    } else {
        result.textContent = 'введіть числа';
    };
});

divideButton.addEventListener('click', function() {
    if (isNaN(parseFloat(firstNumberBox.value)) === false && isNaN(parseFloat(secondNumberBox.value)) === false) {
        if(parseFloat(secondNumberBox.value) === 0) {
            result.textContent = 'на нуль ділити не можна';
        } else {
            result.textContent = parseFloat(firstNumberBox.value) / parseFloat(secondNumberBox.value);
        }
    } else {
        result.textContent = 'введіть числа';
    };
});