window.onload = function () {
    
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
    
    function changeSel() {
        //muda o status de selecionado de uma cor ao clicar em outra
         const selected = document.querySelector('.selected');
         selected.classList.remove('selected');
         event.target.classList.add('selected');
    }
    const colorPalette = document.getElementById('color-palette').children;
     for (let index = 0; index < colorPalette.length; index += 1) {
          colorPalette[index].addEventListener('click', changeSel);
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
     button.addEventListener('click', clearBoard);
     function clearBoard() {
        const pixelBackground = document.querySelectorAll('.pixel');
        for (let index = 0; index < pixelBackground.length; index += 1) {
            const pixelColor = pixelBackground[index];
            pixelColor.style.backgroundColor = 'white';
        }
    }

}