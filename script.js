// eslint-disable-next-line max-lines-per-function
window.onload = function() {
     function clear(pixelColor) {
         for (index = 0; index < pixelColor.length; index += 1) {
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

    //
     

//botão de limpar
     const button = document.getElementById('clear-board');
     const pixelP = document.querySelectorAll('.pixel');
     button.onclick = function() {
         for (let index = 0; index < pixelP.length; index += 1) {
             const pixelC = pixelP[index];
             pixelC.style.backgroundColor = 'white';
        }
    }

}