window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__list'),
        menuItem = document.querySelectorAll('.header__item'),
        hamburger = document.querySelector('.hamburger');
        // back = document.querySelector('.back');


    menuItem.forEach(item => {
        toggleMenu(item);
    });


    function toggleMenu(element){
        element.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__list-active');
            // back.classList.toggle('show');
        });
    }

    toggleMenu(hamburger);

});