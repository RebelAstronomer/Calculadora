const inputArea = document.querySelector('#numberInput');
var isDisplayingResult = false;

// Adicionando valor a calculadora
function addToInput(btn) {
    var btnValue = btn.innerHTML;
    
    // Checando se alguma soma foi feita ou não
    // Caso sim sobrescreva o resultado
    // Caso não apenas adicione mais números
    if (isDisplayingResult == false) {
        inputArea.value += btnValue;
    }
    else {
        inputArea.value = btnValue;
        isDisplayingResult = false;
    }
}

// Limpando a calculadora
function clearInput() {
    inputArea.value = '';
}

// Deketando valores da calculadora
function deletInput() {
    var inputLegth = inputArea.value.length;
    inputArea.value = inputArea.value.substring(0,inputLegth-1);
}

// Calculando
function calculate() {
    var inputValue = inputArea.value.replace(/[^-()\d/*+.]/g, '');
    isDisplayingResult = true;
    inputArea.value = eval(inputValue);
}

// Mudando o tema
function changeTheme() {
    var page = document.body;
    page.classList.toggle('light');
}