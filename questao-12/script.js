const menu = document.getElementById('menu');

menu.addEventListener('mouseover', function() {
    menu.classList.add('hover');
});

menu.addEventListener('mouseout', function() {
    menu.classList.remove('hover');
});

menu.addEventListener('touchstart', function() {
    menu.classList.toggle('active');
});