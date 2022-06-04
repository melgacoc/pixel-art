window.onload = function() {
    function clear(pixelColor) {
     for (index = 0; index < pixelColor.length; index += 1) {
     // eslint-disable-next-line no-param-reassign
     pixelColor[index].style.backgroundColor = 'white';
   }
    }
   // criando pixel
    let container = document.getElementById('pixel-board');
    function createPixel(classe){
            let newDiv = document.createElement('div');
            newDiv.className = classe;
            return newDiv;
    };
    function createPixels(number){
        for(index = 0; index < number; index +=1){
            function addElementAsChild(local,elemento){
                local.appendChild(elemento);
            }
            addElementAsChild(container,createPixel('pixel'));
        }
    }
    createPixels(25);

}