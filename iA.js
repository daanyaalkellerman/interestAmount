let insersi = document.querySelector('[data-insersion]')
let outsersi = document.querySelector('[data-outsersion]')
let calseri = document.querySelector('[data-calsersion]').addEventListener('click',interestAmount )

function interestAmount(){
    outsersi.innerText = 'The amount of interest is '+ ' R' + (insersi.value*15)/100 ;
}