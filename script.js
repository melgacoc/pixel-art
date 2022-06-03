window.onload = function(){
    const pixelColor = document.querySelectorAll('.pixel');
    const container = document.getElementsById('line');
    const creatButton = document.getElementById('clear-board');


    //creatButton.addEventListener('click', function(pixelColor)){
    //    pixelColor.style.backgroundColor = 'white';
   // }

    function clear(pixelColor){
     for(index = 0; index < pixelColor.length; index += 1){
        pixelColor[index].style.backgroundColor = 'white'; 
     }

     function clearButton(){
         creatButton.addEventListener('click',clear);
     }

    }
}