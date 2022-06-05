// eslint-disable-next-line max-lines-per-function
window.onload = function () {
    function clear(pixelColor) {
        for (index = 0; index < pixelColor.length; index += 1) {
            pixelColor[index].style.backgroundColor = 'white';
        }
    }
    // criando pixel
    let container = document.getElementById('pixel-board');
    function createPixel(classe) {
        let newDiv = document.createElement('div');
        newDiv.className = classe;
        return newDiv;
    };
    function createPixels(number) {
        for (index = 0; index < number; index += 1) {
            function addElementAsChild(local, elemento) {
                local.appendChild(elemento);
            }
            addElementAsChild(container, createPixel('pixel'));
        }
    }
    createPixels(25);

    //escolhendo cor da paleta
    const pallet = document.getElementById('color-palette').children;
    for (let index = 0; index < pallet.length; index += 1) {
         pallet[index].addEventListener('click', reclassing);
    }

    function reclassing(event) {
        const selected = document.querySelector('.selected');
        selected.classList.remove('selected');
        event.target.classList.add('selected');
    }

    const pixelBoardSection = document.getElementById('pixel-board');
    for (let index = 0; index < pixelBoardSection.children.length; index += 1) {
        pixelBoardSection.children[index].addEventListener('click', pixelFilling);
    }

    function pixelFilling(event) {
        const colorSelected = document.querySelector('.selected').id;
        event.target.style.backgroundColor = colorSelected;
    }


    //botão de limpar
    const button = document.getElementById('clear-board');
    const pixelBackground = document.querySelectorAll('.pixel');
    button.addEventListener('click', clearBoard);
    function clearBoard () {
        for (let index = 0; index < pixelBackground.length; index += 1) {
            const pixelColor = pixelBackground[index];
            pixelColor.style.backgroundColor = 'white';
        }
    }

}