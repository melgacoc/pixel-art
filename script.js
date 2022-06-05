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
    const selected = document.querySelector('.selected');
    function changeSel() {
        //muda o status de selecionado de uma cor ao clicar em outra
         selected.classList.remove('selected');
         event.target.classList.add('selected');
    }
    const pallet = document.getElementById('color-palette').children;
     for (let index = 0; index < pallet.length; index += 1) {
          pallet[index].addEventListener('click', changeSel);
     }
    //colorindo pixel
    
     function fill() {
        const pickedColor = document.querySelector('.selected').id;
         event.target.style.backgroundColor = pickedColor;
     }

     const pickedPixel = document.getElementById('pixel-board');
     for (let index = 0; index < pickedPixel.children.length; index += 1) {
         pickedPixel.children[index].addEventListener('click', fill);
     }
     
    //botão de limpar
    const button = document.getElementById('clear-board');
    const pixelBackground = document.querySelectorAll('.pixel');
    button.addEventListener('click', clearBoard);

    function clearBoard() {
        for (let index = 0; index < pixelBackground.length; index += 1) {
            const pixelColor = pixelBackground[index];
            pixelColor.style.backgroundColor = 'white';
        }
    }

    
}