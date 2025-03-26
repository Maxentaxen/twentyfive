let box = document.querySelector('.box');
let button = document.querySelector('.button')
button.addEventListener('click', myFunc);

function myFunc(){
    box.style.borderRadius = "0px";
    box.style.left = "0px";
    box.style.height = "100%";
}
