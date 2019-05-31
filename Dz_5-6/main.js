let htmlElements;

let itemsArray = [{
        color: 'white',
        bgColor: 'blue',
    },
    {
        color: 'black',
        bgColor: 'yellow'
    },
    {
        color: 'green',
        bgColor: 'whitesmoke'

    }

];

function init() {
    htmlElements = {
        bgColorInput: document.querySelector('input.bg-color-input'),
        textColorInput: document.querySelector('input.text-color-input'),
        addButton: document.querySelector('button.add-button'),
        items: document.querySelector('div.items'),
        divHello: document.querySelector('div.hello-world')
    };
    htmlElements.bgColorInput.addEventListener('focusout', onFocusOut); //function () { bgBorder(this) });
    htmlElements.textColorInput.addEventListener('focusout', onFocusOut); //function () { textColor(this) });
    htmlElements.addButton.addEventListener('click', getInputsValue);



    render();
}
init();

function render() {
    htmlElements.items.innerHTML = '';
    for (let i = 0; i < itemsArray.length; i++) {
        let divCreate = document.createElement('div'); //создаем div
        let spanCreate = document.createElement('span'); //создаем span
        let buttonCreate = document.createElement('button'); //создаем button

        htmlElements.items.appendChild(divCreate);
        divCreate.appendChild(spanCreate);
        divCreate.appendChild(buttonCreate);
        divCreate.addEventListener('click', chengeColorByClick);
        if (itemsArray[i].selected === true) {
            divCreate.classList.add('item', 'selected');
            document.body.style.backgroundColor = itemsArray[i].bgColor;
            htmlElements.divHello.style.color = itemsArray[i].color;
        }
        divCreate.classList.add('item');
        divCreate.style.backgroundColor = itemsArray[i].bgColor;
        spanCreate.classList.add('item-text');
        spanCreate.innerHTML = itemsArray[i].color;
        spanCreate.style.color = itemsArray[i].color;

        buttonCreate.addEventListener('click', deleteColorDiv);
        buttonCreate.classList.add('delete-button');
        buttonCreate.innerHTML = 'X';
    }
}



function chengeColorByClick() { //замена цвета
    for (let i = 0; i < itemsArray.length; i++) {
        itemsArray[i].selected = false;
    }
    let arrayItem = htmlElements.items.querySelectorAll('div.item');
    arrayItem = Array.from(arrayItem);
    let iN = arrayItem.indexOf(this);
    itemsArray[iN].selected = true;
    render();
}


function deleteColorDiv(event) {
    event.stopPropagation();
    let arrayButton = htmlElements.items.querySelectorAll('button.delete-button');
    arrayButton = Array.from(arrayButton);
    let indexArrayButton = arrayButton.indexOf(this);
    itemsArray.splice(indexArrayButton, 1);
    render();
}


function getInputsValue() {
    htmlElements.inputBgValue = htmlElements.bgColorInput.value;
    htmlElements.inputColorValue = htmlElements.textColorInput.value;
    checkColor(htmlElements.inputBgValue, htmlElements.inputColorValue);
}


function checkColor(inputBgValue, inputColorValue) {
    if (checkIfColorCanBeAdded(inputBgValue) === true && checkIfColorCanBeAdded(inputColorValue) === true) {
        if (checkIfColorAdded(inputColorValue, inputBgValue) === false) {
            pushElementByArray(inputColorValue, inputBgValue);
            reset();
        } else {
            htmlElements.bgColorInput.style.borderColor = 'red';
            htmlElements.textColorInput.style.borderColor = 'red';
        }
    } else {
        htmlElements.bgColorInput.style.borderColor = 'red';
        htmlElements.textColorInput.style.borderColor = 'red';
    }
}



function pushElementByArray(inputColorValue, inputBgValue) {
    itemsArray.push({ color: inputColorValue, bgColor: inputBgValue });
    render();
}


function checkIfColorCanBeAdded(color) {
    if (color.indexOf('rgb') > -1 || color === '') {
        return false;
    }
    let div = document.createElement('div');
    div.style.backgroundColor = color;
    let colorIsSetCorrectly = div.style.backgroundColor === color;
    return colorIsSetCorrectly;
}


function checkIfColorAdded(color, bgColor) {
    let colorAdded = false;
    for (let i = 0; i < itemsArray.length; i++) { //цикл для пробежки по массиву
        if (itemsArray[i].bgColor == bgColor && itemsArray[i].color == color) { //промашечка с переменными(
            colorAdded = true;
        }
    }
    return colorAdded;
}


function reset() {
    htmlElements.bgColorInput.value = '';
    htmlElements.textColorInput.value = '';
    htmlElements.textColorInput.style.borderColor = '';
    htmlElements.bgColorInput.style.borderColor = '';
}

function onFocusOut() {
    let bgColor = htmlElements.bgColorInput.value;
    let colorText = htmlElements.textColorInput.value;
    if (checkIfColorAdded(colorText, bgColor) === false) {
        this.style.borderColor = 'green';
    } else {
        this.style.borderColor = 'red';
    }
}