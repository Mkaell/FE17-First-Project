window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu_item'),
        hamburger = document.querySelector('.hamburger'),
        back = document.querySelector('.back');


    menuItem.forEach(item => {
        toggleMenu(item);
    });


    function toggleMenu(element){
        element.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
            back.classList.toggle('show');
        });
    }

    toggleMenu(hamburger);
    toggleMenu(back);

});