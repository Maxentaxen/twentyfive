var button = document.getElementById('nav-icon1');
var navbar = document.getElementById('nav');
button.addEventListener('click', function() { 
    this.classList.toggle('open');
    navbar.classList.toggle('visible');}
);