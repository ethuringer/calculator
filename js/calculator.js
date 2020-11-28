function displayNumericButtons() {
    const calcDisplay = document.querySelector('#calculator__display')
    const numericButtons = Array.from(document.querySelectorAll('.btn__number')); {
        numericButtons.map(item => item.addEventListener('click', () => 
        calcDisplay.value += parseInt(item.innerText)
        ));
    }
}
displayNumericButtons();

function displayPointButton() {
    const calcDisplay = document.querySelector('#calculator__display')
    const pointButton = document.querySelector('.btn--point'); {
        pointButton.addEventListener('click', () => 
        calcDisplay.value += pointButton.innerText
        );
    }
}
displayPointButton();