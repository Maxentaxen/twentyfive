var button = document.getElementById('nav-icon1');
var navbar = document.getElementById('nav');
var ideaSelect = document.getElementById('idea');
var selected = document.getElementById('selected');
var modelselect = document.getElementById('model');
var addToCart = document.getElementById('cartAdd');
var payButton = document.getElementById('pay');

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
ideaSelect.addEventListener('click', function() {
    selected.classList.toggle('left');
    selected.classList.toggle('right');
    addToCart.classList.toggle('idea-selected')
    addToCart.classList.toggle('model-selected');
    addToCart.textContent = "300:-"
    
})
modelselect.addEventListener('click', function() {
    selected.classList.toggle('left');
    selected.classList.toggle('right');
    addToCart.classList.toggle('model-selected');
    addToCart.classList.toggle('idea-selected')
    addToCart.textContent = "100:-"
})

payButton.addEventListener('click', function() {
    Document.getElementById('betalning').reset();
})
