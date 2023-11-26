//MENU DE HAMBURGUESA
document.addEventListener('DOMContentLoaded', function () {
    let toggle = document.querySelector('.toggle');
    let left = document.querySelector('.left');
    let right = document.querySelector('.right');
    let cerrar = document.querySelector('.close');
    let body = document.querySelector('body');


    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        left.classList.toggle('active');
        right.classList.toggle('overlay');
        body.style.overflow = 'hidden';
    });
    cerrar.onclick = () => {
        toggle.classList.remove('active');
        left.classList.remove('active');
        right.classList.remove('overlay');
        body.style.overflow = '';
    };
    window.onclick = (e) => {
        if (e.target == right) {
            toggle.classList.remove('active');
            left.classList.remove('active');
            right.classList.remove('overlay');
            body.style.overflow = '';
        }
    };
});