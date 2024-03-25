const addButton = document.querySelector('#plus-button');
const minusButton = document.querySelector('#minus-button');
const numberDisplay = document.querySelector('#number-display');

addButton.addEventListener('click', (e) => {
    const number = numberDisplay.value;

    number += number
});

minusButton.addEventListner('click', (e) => {
    const number = numberDisplay.value;

    number -= number
})