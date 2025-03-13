var button = document.getElementById('nav-icon1');
var navbar = document.getElementById('nav');
button.addEventListener('click', function() { 
    this.classList.toggle('open');
    navbar.classList.toggle('visible');}
);

document.onkeydown = function(event) {
    if (event.key === 'Escape' && navbar.classList.contains('visible')) {
        navbar.classList.toggle('visible');
        button.classList.toggle('open');
    } 
}