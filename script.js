const check = document.querySelector('.check');
const input = document.querySelector('.input');
const calculate = document.querySelector('.calculate');

const getRandomNumber = (max, min) => {
    return  Math.floor(Math.random() * (max - min +1) + min);
}

let firstNumber = getRandomNumber(1, 9);
let secondNumber = getRandomNumber(1, 9);

calculate.textContent = `${firstNumber} * ${secondNumber}`;

check.addEventListener('click', () => {
    if ((firstNumber * secondNumber) === Number(input.value)) {
        alert('You god damn right!');
        firstNumber = getRandomNumber(1, 9);
        secondNumber = getRandomNumber(1, 9);
        calculate.textContent = `${firstNumber} * ${secondNumber}`;
    } else {
        alert('WRONG!');
    }

    input.value = '';
    input.focus();
});