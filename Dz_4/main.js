let htmlElements;

let itemsArray = [{
        color: 'white',
        bgColor: 'blue'
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
        items: document.querySelector('div.items')


    };
    console.log(htmlElements);
    render();
}

init();

function render() {
    // <div class="item">
    //   <div class="item" style="background-color: blue;">
    //     <span class="item-text" style="color: white;">
    //       white
    //     </span>
    //     <button class="delete-button">X</button>
    //   </div>
    //   <div class="item" style="background-color: yellow;">
    //     <span class="item-text" style="color: black;">
    //       black
    //     </span>
    //     <button class="delete-button">X</button>
    //   </div>
    // </div>

    for (let i = 0; i < itemsArray.length; i++) {
        let divCreate = document.createElement('div'); //создаем div
        let spanCreate = document.createElement('span'); //создаем span
        let buttonCreate = document.createElement('button'); //создаем button
        htmlElements.items.appendChild(divCreate);
        divCreate.appendChild(spanCreate);
        divCreate.appendChild(buttonCreate);
        divCreate.classList.add('item');
        divCreate.style.backgroundColor = itemsArray[i].bgColor;

        spanCreate.classList.add('item-text');
        spanCreate.innerHTML = itemsArray[i].color;
        spanCreate.style.color = itemsArray[i].color;

        buttonCreate.classList.add('delete-button');
        buttonCreate.innerHTML = 'X';
    }
}